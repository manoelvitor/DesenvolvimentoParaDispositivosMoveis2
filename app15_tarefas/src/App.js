import React, { Component, useEffect, useState } from 'react'
import { View, Text, Switch, ScrollView, TextInput, Pressable,FlatList } from 'react-native'
import { openDatabase } from 'react-native-sqlite-storage'
import style from '../src/style'

const myDB = openDatabase({ name: 'bancoApp15' })

export default App = () => {
  const [tarefa, setTarefa] = useState('')
  const [tarefas, setTarefas] = useState([])

  const msgConsole = (txt) => {
    console.log('--------------------------------------------------')
    console.log(`- ${txt} -`)
    console.log('--------------------------------------------------')
  }

  const criarTabelas = () => {
    myDB.transaction(txn => { 
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tb_tarefas (
          id INTEGER PRIMARY KEY AUTOINCREMENT, 
          nome VARCHAR(20)
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

  const deleteTarefa = (id) => {
    myDB.transaction(txn => {
      txn.executeSql(
        `DELETE FROM tb_tarefas WHERE id = ?`, [id],
        (sqlTxn, response) => {
          msgConsole(`Tarefa com ID = ${id} deletada com Sucesso!`)
          setTarefas('')
          getTarefas()
        },
        error => {
          msgConsole(`Erro ao deletar tarefa com ID = ${id}: ${error.message}`)
        }
      )
    })
  }

  const addTarefa = () => {
    if(!tarefa) {
      alert('Informe alguma tarefa!')
      return false
    }

    myDB.transaction(txn => {
      txn.executeSql(
        `INSERT INTO tb_tarefas (nome) VALUES (?)`,
        [tarefa],
        (sqlTxn, response) => {
          msgConsole(`Tarefa "${tarefa}" adicionada com sucesso!`)
          getTarefas()
          setTarefa('')
        },
        error => {
          msgConsole(`Erro ao inserir tarefa. Erro: ${error.message}`)
        }
      )
    })
  }

  const getTarefas = () => {
    myDB.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM tb_tarefas ORDER BY id`,
        [],
        (sqlTxn, response) => {
          msgConsole('Tarefas do Banco lidas com sucesso!')
          const len = response.rows.length

          if (len > 0) {
            const tarefasLidas = []
            for (let i = 0; i < len; i++) {
              const tarefa = response.rows.item(i)
              tarefasLidas.push({ id: tarefa.id, nome: tarefa.nome })
            }
            setTarefas(tarefasLidas)
          }
        },
        error => {
          msgConsole(`Erro ao obter tarefas para o component: ${error.message}`)
        }
      )
    })
  }

  const renderTarefa = ({ item }) => {
    return(
      <View style={style.tarefa}>
        <Text style={style.txtTarefa}>{ item.id } - { item.nome }</Text>
        <Pressable style={style.btnApagar}
          onPress={ () => { deleteTarefa(item.id) }}
        >
          <Text style={style.txtBtnApagar}>Apagar</Text>
        </Pressable>
      </View>
    )
  }

  useEffect(async () => {
    await criarTabelas()
    await getTarefas()
  }, [])
  
  return(
    <View style={style.phoneScreen}>
      <Text style={style.title}>Aplicativo Tarefas</Text>
      <View style={style.boxBtnInput}>
        <TextInput
          value={ tarefa }
          onChangeText={ setTarefa }
          style={style.input}
          placeholder=' Digite o nome da tarefa'
        />
        <Pressable 
          onPress={ addTarefa }
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
        data={ tarefas }
        renderItem={ renderTarefa }
        key={ tarefaLida => tarefaLida.id }
      />

    </View>
  )
}