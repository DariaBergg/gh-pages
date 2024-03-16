
// Функция поиска, которая принимает массив элементов и поисковый запрос
export const searchBagels = (bagelItems, searchTerm) => {
    if (!searchTerm.trim()) {
        // Если поисковый запрос пустой, вернем исходный список багелей
        return bagelItems;
      }
    // Преобразуем поисковый запрос к нижнему регистру для удобства сравнения
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    // Фильтруем массив элементов, оставляя только те, в названии которых содержится поисковый запрос
    const results = bagelItems.filter(item =>
        item.name.toLowerCase().includes(lowerCaseSearchTerm)
      );
    return results;    
  };
  