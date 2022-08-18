[![Build status](https://ci.appveyor.com/api/projects/status/bfppcc579jecte8m/branch/master?svg=true)](https://ci.appveyor.com/project/Sergius92739/ra-12-3-redux-toolkit-main-details-front/branch/master)

# Список и детали

### Deployment: <a href="https://sergius92739.github.io/ra-12.3-redux_toolkit-main_details-front/">Github Pages</a>

Напишите проект, использующий React Router и Redux Toolkit, который удовлетворяет следующим условиям:

1. На главной странице показывается список услуг (редактирование не нужно, достаточно просто ссылок) - данные загружаются методом GET на http://localhost:7070/api/services
1. При переходе по ссылке (/:id/details), загружаются детали услуги - GET на http://locahost:7070/api/services/:id

При загрузке должен отображаться индикатор загрузки (что на странице списка, что на странице деталей):

![](./assets/spinner.png)

При ошибке - показываться сообщение об ошибке и кнопка "Повторить запрос", при нажатии на которой осуществляется попытка снова выполнить запрос (с индикатором загрузки и т.д.):

![](./assets/retry.png)

Готовый бэкенд расположен в каталоге `backend`.

