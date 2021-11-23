import React, { Component } from 'react'
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'

const style = StyleSheet.create({
  app: {
    backgroundColor: '#eaeded'
  },
  carrossel: {
    width: Dimensions.get('window').width
  },
  ofertas: {
    marginTop: 15,
    backgroundColor: '#fff',
    marginLeft: 15,
    marginRight: 15,
    padding: 25
  }, 
  ultimaVaga: {
    marginTop: 15,
    backgroundColor: '#fff',
    marginLeft: 15, 
    marginRight: 15,
    marginBottom: 15,
    padding: 15
  },
  titles: {
    fontSize: 22,
    fontWeight:'bold',
    color: '#000'
  },
  titleRequirements: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#414141'
  },
  textos: {
    marginTop: 30,
    color: '#007185',
    fontSize: 16
  }
})

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={style.app}>
        <View style={style.carrossel}>
          <ScrollView>

            <View style={style.ofertas}>
              <Text style={style.titles}>
                Desenvolvedor Python Júnior
              </Text>
              <Text style={style.titleRequirements}>Salário:</Text>
              <Text>{'\u2022'} R$ 2950.95</Text>
              <Text style={style.titleRequirements}>
                O que esperamos:
              </Text>
              <Text>• Experiência em programação Python;</Text>
              <Text>• Versionamento Git;</Text>
              <Text>• Banco de dados SQL;</Text>
              <Text>• Perfil comunicativo, ágil, curioso e pró-ativo em resolver problemas.</Text>
              <Text style={style.titleRequirements}>
                As principais tecnologias e ferramentas que usamos atualmente:
              </Text>
              <Text>• MySQL e MongoDB;</Text>
              <Text>• Módulos e frameworks Python: spaCy, jupyter, pandas;</Text>
              <Text>• Cloud (AWS e Google);</Text>
              <Text>• Gitlab, Slack, Trello.</Text>
              <Text style={style.textos}>Entre em contato conosco</Text>
            </View>

            <View style={style.ofertas}>
              <Text style={style.titles}>
                Desenvolvedor Java Senior
              </Text>
              <Text style={style.titleRequirements}>Salário:</Text>
              <Text>{'\u2022'} R$ 8988.15</Text>
              <Text style={style.titleRequirements}>Descrição da vaga</Text>
              <Text>• Atuar no time de desenvolvimento voltado para área de fundos offshore;</Text>
              <Text>• Atuar com o sistema core das operações da área, integrações API com sistemas satélites, atualizações e correções;</Text>
              <Text>• Trabalhar em conjunto com outra área de desenvolvimento focada na refatoração e modernização de códigos e tecnologias (microsserviços, versões Java, hospedagem em AWS);</Text>
              <Text>• Levantamento de requisitos e alinhamento de demandas e necessidades das áreas de negócios do banco</Text>
              <Text>• Apresentação de novas soluções e melhorias;</Text>
              <Text>• Gerenciamento de demanda, negociação de prazos e escopos;</Text>
              <Text>• Metodologia ágil.</Text>
              <Text style={style.titleRequirements}>Perfil desejado</Text>
              <Text>• Java 8, microserviços;</Text>
              <Text>• Experiência e/ou conhecimentos sobre o mercado financeiro e áreas afins, assim como suas ferramentas, tecnologias e plataformas como, por exemplo, Murez, Findur, Calypso.</Text>
              <Text style={style.textos}>Entre em contato conosco</Text>
            </View>

            <View style={style.ultimaVaga}>
              <Text style={style.titles}>
                Desenvolvedor React Júnior
              </Text>
              <Text style={style.titleRequirements}>Salário:</Text>
              <Text>{'\u2022'} R$ 2100.00</Text>
              <Text style={style.titleRequirements}>Perfil desejado</Text>
              <Text>• Experiência com JavaScript (ES6+)</Text>
              <Text>• Experiência com TypeScript</Text>
              <Text>• Experiência com Styled Components</Text>
              <Text>• Conhecimentos sólidos em React</Text>
              <Text>• Conhecimentos sólidos em React Native</Text>
              <Text>• Experiência com Context API, Redux ou MobX</Text>
              <Text style={style.textos}>Entre em contato conosco</Text>
            </View>

          </ScrollView>
        </View>
      </View>
    )
  }
}

export default App