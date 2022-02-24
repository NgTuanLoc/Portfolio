const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map(
        (item, index) => {
          return (
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <a
              href={`#${item}`}
              key={item + index}
              className="app__navigation-dot"
              style={active === item ? { backgroundColor: '#313BAC' } : {}}></a>
          );
        }
      )}
    </div>
  );
};

export default NavigationDots;