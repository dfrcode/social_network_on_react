let rerenderTreeDom = () => {
  console.log("State changed");
};

let state = {
  profilePage: {
    postsData: [
      {
        id: 1,
        message: "Hi, how are you!?",
        likes: 15,
      },
      {
        id: 2,
        message: "It is my first post",
        likes: 20,
      },
    ],
    textValue: "your text...",
  },
  messagesPage: {
    dialogsData: [
      {
        id: 1,
        name: "James",
        url:
          "https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg",
      },
      {
        id: 2,
        name: "Jane",
        url: "https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-32.jpg",
      },
      {
        id: 3,
        name: "Kate",
        url:
          "https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg",
      },
      {
        id: 4,
        name: "Ivan",
        url:
          "https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-70.jpg",
      },
      {
        id: 5,
        name: "Sasha",
        url:
          "https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg",
      },
    ],
    messagesData: [
      {
        id: 1,
        message: "Hi",
      },
      {
        id: 2,
        message: "How are you?",
      },
    ],
  },
};

export let newPost = (message, likes = 0) => {
  let newObj = {
    id: state.profilePage.postsData.length + 1,
    message: message,
    likes: likes,
  };

  state.profilePage.postsData.push(newObj);
  rerenderTreeDom(state);
};

export let changeValue = (text = "") => {
  state.profilePage.textValue = text;
  rerenderTreeDom(state);
};

export let subscribe = (observer) => {
  rerenderTreeDom = observer;
}

export default state;
