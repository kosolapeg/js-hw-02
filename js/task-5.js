"user strict";

const checkForSpam = function (message) {
  const messageLowerCase = message.toLowerCase();
  const messageIncludeSpam =
    messageLowerCase.includes("spam") || messageLowerCase.includes("sale");

  return messageIncludeSpam;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
