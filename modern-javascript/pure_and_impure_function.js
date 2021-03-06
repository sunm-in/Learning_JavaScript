'use strict';

{
  // π μμ ν¨μ pure function
  // μ΄λ€ μΈλΆ μνμ μμ‘΄νμ§λ μκ³  λ³κ²½νμ§λ μλ, μ¦ λΆμ ν¨κ³Όκ° μλ ν¨μ
  // λμΌν μΈμκ° μ λ¬λλ©΄ μΈμ λ λμΌν κ°μ λ°ννλ ν¨μλ€.
  // -> μΈλΆ μνμ μμ‘΄x, λ§€κ°λ³μλ₯Ό ν΅ν΄ ν¨μ λ΄λΆλ‘ μ λ¬λ μΈμμκ²λ§ μμ‘΄ν΄ λ°νκ°μ λ§λ λ€.
  let count = 0; // νμ¬ μΉ΄μ΄νΈλ₯Ό λνλ΄λ μν

  // μμ ν¨μ increaseλ λμΌν μΈμκ° μ λ¬λλ©΄ μΈμ λ λμΌν κ°μ λ°ννλ€.
  function increase(n) {
    return ++n;
  }

  // μμ ν¨μκ° λ°νν κ²°κ³Όκ°μ λ³μμ μ¬ν λΉν΄μ μνλ₯Ό λ³κ²½
  count = increase(count);
  console.log(count); // 1

  count = increase(count);
  console.log(count); // 2
}

{
  // π λΉμμ ν¨μ impure function
  // μΈλΆ μνμ μμ‘΄νκ±°λ μΈλΆ μνλ₯Ό λ³κ²½νλ, μ¦ λΆμ ν¨κ³Όκ° μλ ν¨μ
  // μΈλΆ μνμ λ°λΌ λ°νκ°μ΄ λ¬λΌμ§λ ν¨μ
  let count = 0; // νμ¬ μΉ΄μ΄νΈλ₯Ό λνλ΄λ μν: increase ν¨μμ μν΄ λ³ννλ€.

  // λΉμμ ν¨μ
  function increaseλ() {
    return ++count; // μΈλΆ μνμ μμ‘΄νλ©° μΈλΆ μνλ₯Ό λ³κ²½νλ€.
  }

  // λΉμμ ν¨μλ μΈλΆ μν(count)λ₯Ό λ³κ²½νλ―λ‘ μν λ³νλ₯Ό μΆμ νκΈ° μ΄λ €μμ§λ€.
  increase();
  console.log(count); // 1

  increase();
  console.log(count); // 2
}

/**
 * ν¨μν νλ‘κ·Έλλ°μ μμ ν¨μμ λ³΄μ‘° ν¨μμ μ‘°ν©μ ν΅ν΄ μΈλΆ μνλ₯Ό λ³κ²½νλ λΆμ ν¨κ³Όλ₯Ό μ΅μνν΄μ
 * λΆλ³μ±(immutability)μ μ§ν₯νλ νλ‘κ·Έλλ° ν¨λ¬λ€μμ΄λ€.
 *
 * ν¨μν νλ‘κ·Έλλ°μ κ²°κ΅­ μμ ν¨μλ₯Ό ν΅ν΄ λΆμ ν¨κ³Όλ₯Ό μ΅λν μ΅μ ν΄ μ€λ₯λ₯Ό νΌνκ³  νλ‘κ·Έλ¨μ μμ μ±μ λμ΄λ €λ λΈλ ₯μ μΌνμ΄λΌ ν  μ μλ€.
 * μλ°μ€ν¬λ¦½νΈλ λ©ν° ν¨λ¬λ€μ μΈμ΄μ΄λ―λ‘ κ°μ²΄μ§ν₯ νλ‘κ·Έλλ°λΏλ§ μλλΌ ν¨μν νλ‘κ·Έλλ°μ μ κ·Ήμ μΌλ‘ νμ©νκ³  μλ€.
 */
