export function convertWin(win: number): any {
  if (!win && win == 0) {
    return {
        win: "Невозможно",
        description: "Данный тендер невозможен к работе над ним."
    }
  }
  else if (win >= 0 && win <= 25) {
    return {
        win: "Низко",
        description: "Вероятность получения прибыли крайне мала."
    }
  }
  else if (win >= 26 && win <= 50) {
    return {
        win: "Маловероятно",
        description: "Шансы присутсвуют, но лучше искать дальше."
    }
  }
  else if (win >= 51 && win <= 75) {
    return {
        win: "Хорошо",
        description: "Данный тендер может запасным вариантом в случае отсутствие альтернативы."
    }
  }
  else if (win >= 76 && win <= 90) {
    return {
        win: "Отлично",
        description: "Данный тендер может стать основным курсом вашего развития в данной сфере."
    }
  }
  else {
    return {
        win: "Превосхожно",
        description: "Если у вас появился данный тендер, значит вы вытянули золотой билет."
    }
  }
}