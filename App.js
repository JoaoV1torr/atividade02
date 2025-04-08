

import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const technologies = [
  {
    id: '0',
    name: 'Clube da esquina',
    description: '"Clube da Esquina" (1972) é um dos álbuns mais importantes da música brasileira, resultado da parceria entre Milton Nascimento e Lô Borges. Com uma sonoridade inovadora, o disco mistura MPB, rock progressivo, jazz, música erudita e influências latinas, criando uma estética única e à frente do seu tempo.',
    image: 'https://f.i.uol.com.br/fotografia/2019/04/17/15555399025cb7a7becc474_1555539902_3x2_md.jpg',
  },
  {
    id: '1',
    name: 'Djavan Ao vivo 1999',
    description: 'Esse álbum registra uma das apresentações mais marcantes da carreira de Djavan, reunindo seus maiores sucessos com novos arranjos e uma interpretação vibrante ao vivo. Com músicas como “Oceano”, “Samurai” e “Flor de Lis”, o disco destaca a versatilidade do artista ao transitar por MPB, jazz, samba, pop e ritmos afro-brasileiros. É uma celebração da sofisticação musical e da presença de palco de Djavan.',
    image: 'https://upload.wikimedia.org/wikipedia/pt/a/a1/Djavan_ao_vivo.jpg',
  },
  {
    id: '2',
    name: 'Lilás',
    description: '"Lilás" marca uma fase mais pop e eletrônica na carreira de Djavan, sem perder sua assinatura rítmica e poética. Com arranjos modernos para a época e letras marcantes, o álbum trouxe sucessos como “Lilás” e “Sina”, consolidando Djavan como um dos artistas mais criativos da MPB dos anos 80. A mistura de romantismo, groove e brasilidade torna o disco atemporal.',
    image: 'https://djavan.com.br/content/uploads/2018/11/lilas.jpg',
  },

  {
    id: '3',
    name: 'Construção',
    description: 'Construção (1971) - Chico Buarque Considerado uma obra-prima da MPB, "Construção" é um álbum fortemente politizado, lançado durante a ditadura militar. Chico Buarque utiliza construções poéticas engenhosas e melodias sofisticadas para criticar o regime e refletir sobre a condição humana. A faixa-título, com sua métrica inovadora e crítica social, é um marco na história da música brasileira. O disco é denso, provocativo e profundamente artístico.',
    image: 'https://upload.wikimedia.org/wikipedia/pt/7/75/Constru%C3%A7%C3%A3o_chico_buarque.jpg',
  },
  {
    id: '4',
    name: 'Chega de saudade',
    description: 'Esse álbum é o divisor de águas da música brasileira e marca o nascimento oficial da bossa nova. Com seu jeito calmo de cantar e o violão com batida única, João Gilberto revolucionou a forma de se fazer samba e influenciou gerações. Faixas como “Chega de Saudade”, “Desafinado” e “Bim Bom” tornaram-se hinos do gênero. O disco é simples, elegante e revolucionário.',
    image: 'https://i.discogs.com/KySHUoanBy7XKOtqRZw4-0vN5Zni498iwpRCRZ_B8uk/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyMTg1/NTIxLTE1MzAwMTY0/NTAtNjA4NS5qcGVn.jpeg',
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Melodia Nacional: Os Álbuns Imortais da MPB</Text>
      <FlatList
        data={technologies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#800080',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default App;