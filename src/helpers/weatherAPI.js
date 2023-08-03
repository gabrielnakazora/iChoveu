const API_KEY = import.meta.env.VITE_TOKEN;
// Remova os comentários a medida que for implementando as funções

export const searchCities = async (term) => {
  const response = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${API_KEY}&q=${term}`);
  const data = await response.json();
  if (data.error || data.length === 0) {
    alert('Nenhuma cidade encontrada');
  }
  console.log(data);
  return data;
};

export const getWeatherByCity = async (cityURL) => {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${API_KEY}&q=${cityURL}`);
  const data = await response.json();
  const tempo = {
    name: data.location.name,
    country: data.location.country,
    temp: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
    url: cityURL,
  };
  console.log(tempo);
  return tempo;
};
