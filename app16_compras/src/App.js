import React, { Component, useEffect, useState } from 'react'
import { Text, View, Switch, ScrollView, TextInput, Pressable,FlatList } from 'react-native'
import { openDatabase } from 'react-native-sqlite-storage'
import style from '../src/style'

const myDB = openDatabase({ name: 'bancoApp16' })

export default App = () => {
  const [nmProduto, setNmProduto] = useState('')
  const [qtProduto, setQtProduto] = useState(0)
  const [produtosComp, setProdutosComp] = useState([])

  const msgConsole = (txt) => {
    console.log('--------------------------------------------------')
    console.log(`- ${txt} -`)
    console.log('--------------------------------------------------')
  }

  const criarTabelas = () => {
    myDB.transaction(txn => { 
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tb_compras (
          id INTEGER PRIMARY KEY AUTOINCREMENT, 
          nm_produto VARCHAR(20) NOT NULL,
          qt_produto INTEGER DEFAULT 1
        )`,
        [],
        (sqlTxn, response) => {
          msgConsole('Tabela do Banco criada com sucesso')
        },
        error => {
          msgConsole(`Erro ao criar tabela: ${error.message}`)
        }
      )
    })
  }

  const deleteCompra = (id) => {
    myDB.transaction(txn => {
      txn.executeSql(
        `DELETE FROM tb_compras WHERE id = ?`, [id],
        (sqlTxn, response) => {
          msgConsole(`Compra com ID = ${id} deletada com Sucesso!`)
          setProdutosComp('')
          getCompras()
        },
        error => {
          msgConsole(`Erro ao deletar compra com ID = ${id}: ${error.message}`)
        }
      )
    })
  }

  const addCompra = () => {
    if(!nmProduto && !qtProduto) {
      alert('Informe a quantidade e o nome da Compra!')
      return false
    }

    else if(!nmProduto) {
      alert('Informe o nome da Compra!')
      return false
    }

    else if(!qtProduto) {
      alert('Informe a quantida da Compra!')
      return false
    }

    myDB.transaction(txn => {
      txn.executeSql(
        `INSERT INTO tb_compras (nm_produto, qt_produto) VALUES (?,?)`,
        [nmProduto, qtProduto],
        (sqlTxn, response) => {
          msgConsole(`"${qtProduto}(s) ${nmProduto}(s)" adicionado(s) com sucesso!`)
          getCompras()
          setNmProduto('')
          setQtProduto(0)
        },
        error => {
          msgConsole(`Erro ao inserir produto. Erro: ${error.message}`)
        }
      )
    })
  }

  const getCompras = () => {
    myDB.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM tb_compras ORDER BY id`,
        [],
        (sqlTxn, response) => {
          msgConsole('Compras do Banco lidas com sucesso!')
          const len = response.rows.length

          if (len > 0) {
            const comprasLidas = []
            for (let i = 0; i < len; i++) {
              const compra = response.rows.item(i)
              comprasLidas.push({ 
                id: compra.id, 
                nome: compra.nm_produto,
                quantidade: compra.qt_produto
              })
            }
            setProdutosComp(comprasLidas)
          }
        },
        error => {
          msgConsole(`Erro ao obter compras para o component: ${error.message}`)
        }
      )
    })
  }

  const renderCompra = ({ item }) => {
    return(
      <View style={style.tarefa}>
        <Text style={style.txtTarefa}>
          { item.id } - { item.nome } ({ item.quantidade })
        </Text>
        <Pressable style={style.btnApagar}
          onPress={ () => { deleteCompra(item.id) }}
        >
          <Text style={style.txtBtnApagar}>Apagar</Text>
        </Pressable>
      </View>
    )
  }

  useEffect(async () => {
    await criarTabelas()
    await getCompras()
  }, [])

  return(
    <View style={style.phoneScreen}>
      <Text style={style.title}>Lista de Compras</Text>
      <View style={style.boxBtnInput}>
        <TextInput
          value={ qtProduto }
          onChangeText={ setQtProduto }
          style={style.input1}
          placeholder=' Qt '
        />
        <TextInput
          value={ nmProduto }
          onChangeText={ setNmProduto }
          style={style.input2}
          placeholder=' Nome da compra '
        />
        <Pressable 
          onPress={ addCompra }
          style={
            ({ pressed }) => [
              pressed ? style.btn2 : style.btn
            ]}
          >
          <Text style={style.txtBtn}>+</Text>
        </Pressable>
      </View>


      <FlatList 
        scrollEnabled
        style={style.areaTarefas}
        data={ produtosComp }
        renderItem={ renderCompra }
        key={ produtoLido => produtoLido.id }
      />

    </View>
  )
}