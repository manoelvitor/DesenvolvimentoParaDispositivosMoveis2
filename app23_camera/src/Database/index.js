import { openDatabase } from "react-native-sqlite-storage";

const myDB = openDatabase({
  name: 'bancoApp23'
})

export const criarTabelas = () => {
  myDB.transaction(txn => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS tb_usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome VARCHAR(50),
        area VARCHAR(50),
        urlFoto VARCHAR(100)
      )`,
      [],
      (sqlTxn, res) => {
        console.log('Tabela do banco criada com sucesso!')
      },
      e => {
        console.log('Erro ao criar tabela: ' + e.message)
      }
    )
  })
}

export const getUsuarios = (setUsuariosComp) => {
  myDB.transaction(txn => {
    txn.executeSql(
      `SELECT * FROM tb_usuarios ORDER BY id`,
      [],
      (sqlTxn, response) => {
        console.log('Usuários do banco lidos com sucesso!')
        const len = response.rows.length

        if (len > 0) {
          const usuariosLidos = []
          for (let i = 0; i < len; i++) {
            const user = response.rows.item(i)
            usuariosLidos.push({ 
              id: user.id, 
              nome: user.nome,
              area: user.area,
              urlFoto: user.urlFoto
            })
          }
          setUsuariosComp(usuariosLidos)
        }
      },
      e => {
        console.log(`Erro ao obter usuários para o component: ${e.message}`)
      }
    )
  })
}

export const addUsuario = (nome, area, urlFoto) => {
  if (!nome || !area || !urlFoto) {
    alert('Algum campo do usuário faltando ou errado!')
    return false
  }

  myDB.transaction(txn => {
    txn.executeSql(
      `INSERT INTO tb_usuarios (nome, area, urlFoto) 
        VALUES (?,?,?)`,
      [nome, area, urlFoto],
      (sqlTxn, res) => {
        console.log(`Usuário chamado: ${nome} adicionado!`)
      },
      e => {
        console.log('Erro ao adicionar usuário novo: ' + e.message)
      }
    )
  })
}