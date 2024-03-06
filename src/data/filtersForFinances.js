export const filters = [
  {
    placeholder: "Статистика за период",
    options: [
      { value: "up", text: "Вверх" },
      { value: "down", text: "Вниз" },
    ],
  },
  {
    placeholder: "Сумма",
    options: [
      { value: "less", text: "Меньше" },
      { value: "increase", text: "Больше" },
    ],
  },

  {
    placeholder: "Способ вывода",
    options: [
      { value: "BTC", text: "BTC" },
      { value: "WEBMONEY", text: "WebMoney" },
    ],
  },
  {
    placeholder: "Комментарий",
    options: [
      { value: "less", text: "Больше букв" },
      { value: "more", text: "Меньше букв" },
    ],
  },

  {
    placeholder: "Статус",
    options: [
      { value: "ready", text: "Успешно" },
      { value: "false", text: "Отклонено" },
      { value: "inProcess", text: "В обработке" },
    ],
  },
];
