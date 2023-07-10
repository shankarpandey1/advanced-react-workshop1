import BusinessCard from './BusinessCard';

const Main = () => {
  const businessCardsData = [
    { name: 'Jorge', email: 'jorge@example.com', tel: '111-1111', photo: 'https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png' },
    { name: 'Shankar', email: 'shankar@example.com', tel: '222-2222', photo: 'https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png' },
 { name: 'Lucian', email: 'lucian@example.com', tel: '333-3333', photo: 'https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png' },
 { name: 'Ali', email: 'ali@example.com', tel: '444-4444', photo: 'https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png' },
 { name: 'Jason', email: 'jason@example.com', tel: '555-5555', photo: 'https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png' },
    
  ];

  return (
    <div className="main-content">
      {businessCardsData.map((cardData, index) => (
        <BusinessCard key={index} {...cardData} />
      ))}
    </div>
  );
};

export default Main;




