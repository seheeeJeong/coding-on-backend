const mysql = require("mysql"); // database 정보를 받아온다

const conn = mysql.createConnection({
  // 각자 mysql에 맞게 변경
  host: "localhost",
  user: "user",
  password: "1234",
  database: "codingon",
});

exports.post_signup = (data, callback) => {
  // data: req.body
  // callback: sql문 실행 후 할 일 함수
  const sql = `INSERT INTO user (userid, name, pw) VALUES ('${data.userid}','${data.name}','${data.pw}')`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err; // 에러 발생시 에러 예외처리
    }

    console.log("model post_singup >> ", rows);
    // OkPacket {
    //     fieldCount: 0,
    //     affectedRows: 1,
    //     insertId: 0,
    //     serverStatus: 2,
    //     warningCount: 0,
    //     message: '',
    //     protocol41: true,
    //     changedRows: 0
    //   }
    callback();
  });
};

exports.post_signin = (data, callback) => {
  const sql = `SELECT * FROM user WHERE userid='${data.userid}' and pw='${data.pw}' LIMIT 1`; // 로그인 했을때 user 테이블에 있는 모든 정보를 불러오는 sql문을 작성한다.
  // query에는 sql문으로 정리된 테이터가 담기게 된다.
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("model post_signin >>", rows); // [ {} ]
    callback(rows);
  });
};

// 로그인한 유저 한 명을 가져옴!
exports.post_profile = (userid, cb) => {
  const sql = `SELECT * FROM user WHERE userid='${userid}' LIMIT 1`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("Model User: ", rows); // [ {} ]
    cb(rows);
  });
};

exports.edit_profile = (data, cb) => {
  const sql = `update user set userid='${data.userid}', name='${data.name}', pw='${data.pw}' where id='${data.id}'`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("Model edit profile", rows);
    // OkPacket {
    //   fieldCount: 0,
    //   affectedRows: 1,
    //   insertId: 0,
    //   serverStatus: 2,
    //   warningCount: 0,
    //   message: '(Rows matched: 1  Changed: 1  Warnings: 0',
    //   protocol41: true,
    //   changedRows: 1
    // }
    cb();
  });
};

exports.delete_profile = (id, cb) => {
  const sql = `delete from user where id = '${id}'`;
  conn.query((err, rows) => {
    if (err) {
      throw err;
    }

    cb();
  });
};
