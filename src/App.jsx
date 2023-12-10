// App.jsx
import React from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import Container from './components/Container';

function App() {
  const images = [
    'EG009/EG009-R.jpg',
    'EG012/EG012-R.jpg',
    'EG020/EG020-200P-R.jpg',
    'EG022/EG022-100P-R.jpg',
    'EG074/EG074-200P-R.jpg',
    'EG075/EG075-200P-R.jpg',
    'EG094/EG094-200P-R.jpg',
    'EG115/EG115-100P-R.jpg',
  ];
  const buttonsColors = [
    ['#E6CA97', '#D9D9D9', '#E1A4A9'],
    ['#E6CA97', '#D9D9D9', '#E1A4A9'],
    ['#E6CA97', '#D9D9D9', '#E1A4A9'],
    ['#E6CA97', '#D9D9D9', '#E1A4A9'],
    ['#E6CA97', '#D9D9D9', '#E1A4A9'],
    ['#E6CA97', '#D9D9D9', '#E1A4A9'],
    ['#E6CA97', '#D9D9D9', '#E1A4A9'],
    ['#E6CA97', '#D9D9D9', '#E1A4A9']
  ];

  const prices = [
    '$101.00 USD',
    '$121.00 USD',
    '$95.00 USD',
    '$135.00 USD',
    '$135.00 USD',
    '$135.00 USD',
    '$135.00 USD',
    '$135.00 USD',
  ];
  const names = [
    'Engagement Ring 1',
    'Engagement Ring 2',
    'Engagement Ring 3',
    'Engagement Ring 4',
    'Engagement Ring 5',
    'Engagement Ring 6',
    'Engagement Ring 7',
    'Engagement Ring 8',
  ];


  return (
    <div className="container mx-auto p-4">
      <Header />
      <Container />
      <Slider images={images} prices={prices} names={names} buttonsColors={buttonsColors} />
    </div>
  );
}

export default App;
