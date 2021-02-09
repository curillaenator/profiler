const initialState = {
  welcome: "Приветствую в PROФайлере",
  intro: {
    main:
      "Это учебное демо приложение для моего освоения ReactJS на необходимом в современной WEB разработке уровне построения отзывчивого UI.",
    technology:
      "В разработке данного SPA использую предоставленный обучающим ресурсом IT-KAMASUTRA серверный API и самые распространеные и популярные NPM библиотеки:",
    conclusion:
      "Приложение пишу опираясь на концепцию функционального подхода с использованием React Hooks",
  },
  techs: {
    Redux:
      " и ее обвязка (react-redux, redux-thunk) для глобального стейт-менежмента",
    "React-Router": " для роутинга и постраничного отображения UI",
    Axios: " для REST запросов",
    "React-final-form": " для обработки вводимых пользвателями данных",
    "Node-sass":
      " для модульной стилизации компонент с использованием возможностей Sass",
  },
  testAccount: {
    text: "Используйте тестовый аккаунт для входа в приложение:",
    login: { Login: "free@samuraijs.com", Password: "free" },
  },
};

export const welcomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "WELCOME":
      return { ...state };

    default:
      return state;
  }
};
