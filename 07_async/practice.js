// 실습1 callback -> promise 로 변경

// 기존 코드
/*function call(name, cb) {
  setTimeout(function () {
    console.log(name);
    cb(name);
  }, 1000);
}

function back(cb) {
  setTimeout(function () {
    console.log('back');
    cb('back');
  }, 1000);
}

function hell(cb) {
  setTimeout(function () {
    cb('callback hell');
  }, 1000);
}

// call -> back -> hell 순서로 실행
call('kim', function (name) {
  console.log(name + '반가워');
  back(function (txt) {
    console.log(txt + '을 실행했구나');
    hell(function (message) {
      console.log('여기는 ' + message);
    });
  });
});
*/

// 내가 푼 것 ---------------------
/*
function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    });
  }, 1000);
}

function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    });
  }, 1000);
}

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("callback hell");
    });
  }, 1000);
}

call("kim")
  .then(function (name) {
    console.log(name, "반가워");
    return back(back);
  })
  .then(function (txt) {
    console.log(txt, "를 실행했구나");
    return hell();
  })
  .then(function (message) {
    console.log("여기는", message);
  });
*/

// 선생님 풀이 ---------------------
/*
function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name); // 작업 성공시 then(name)
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back"); // 작업 성공시 then('back')
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

// call -> back -> hell 순서로 실행
call("kim")
  .then(function (name) {
    console.log(`${name} 반가워`);
    return back();
  })
  .then(function (txt) {
    console.log(`${txt}를 실행했구나`);
    return hell();
  })
  .then(function (msg) {
    console.log(msg);
  });

// 화살표 함수 버전 ---------------------
call("kim")
  .then((name) => {
    console.log(`${name} 반가워`);
    return back();
  })
  .then((txt) => {
    console.log(`${txt}을 실행했구나`);
    return hell();
  })
  .then((msg) => {
    console.log(msg);
  });
  */

//------------------------------------------------------------------------------------
// 실습2 (실습1 코드 promise -> async/await exec 함수 만들어 실행하게 하기)
// 내가 푼 것 ---------------------

function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name); // 작업 성공시 then(name)
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back"); // 작업 성공시 then('back')
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

// call -> back -> hell 순서로 실행
async function exec() {
  let name = await call("kim");
  console.log(`${name} 반가워`);
  let txt = await back();
  console.log(`${txt}을 실행했구나`);
  let msg = await hell("callback");
  console.log(`여기는 ${msg}`);
}
exec();

//------------------------------------------------------------------------------------
// 실습3

// 내가 푼 것 ---------------------
/*
function changeColor(cc) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = cc;
      resolve(cc);
    }, 1000);
  });
}

changeColor("red")
  .then(function (cc) {
    return changeColor("orange");
  })
  .then(function (cc) {
    return changeColor("yellow");
  })
  .then(function (cc) {
    return changeColor("green");
  })
  .then(function (cc) {
    return changeColor("blue");
  });
  */

// 선생님 풀이 ---------------------
/*
function changeBgColor(newColor) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.body.style.backgroundColor = newColor;
      resolve();
    }, 1000);
  });
}

changeBgColor("red")
  .then(function () {
    return changeBgColor("orange");
  })
  .then(function () {
    return changeBgColor("yellow");
  })
  .then(function () {
    return changeBgColor("green");
  })
  .then(function () {
    return changeBgColor("blue");
  });
*/

//------------------------------------------------------------------------------------
// 실습4 (실습3 코드를 async/await 사용해서 변경)

async function changeBgColor(newColor) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.body.style.backgroundColor = newColor;
      resolve();
    }, 1000);
  });
}

async function exec() {
  await changeBgColor("red");
  await changeBgColor("orange");
  await changeBgColor("yellow");
  await changeBgColor("green");
  await changeBgColor("blue");
}

exec();
