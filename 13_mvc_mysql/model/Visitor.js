// [Before]
// // (임시) DB로부터 방명록 데이터를 받아옴
// exports.getVisitors = () => {
//   return [
//     { id: 1, name: "홍길동", comment: "내가 왔다." },
//     { id: 2, name: "이찬혁", comment: "으라차차" },
//   ];
// };

// [after] mysql 연결!
const mysql = require("mysql");

// database 연결
const conn = mysql.createConnection({
  host: "localhost", // database가 설치된 ip 주소
  user: "test", // 데이터베이스 접속 계정명
  password: "1234", // 데이터베이스 접속 비밀번호
  database: "codingon", // 사용할 데이터베이스 이름
});

exports.getVisitors = (callback) => {
  // conn.query(sql, callback)
  // -> conn 에 저장되어 있는 데이터베이스 접근해서 sql문 실행
  // -> 결과물 callback 함수에 넘겨줌
  const sql = "SELECT * FROM visitor;";

  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("Visitor.js >> ", rows);
    callback(rows);
  });
};

exports.postVisitor = (data, callback) => {
  console.log(data); // controller에서 넘겨주고 있는 클라이언트에서 보내주는 폼 값 (req.body)

  const sql = `insert into visitor(name, comment) values('${data.name}', '${data.comment}');`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("Visitor.js: ", rows.insertId);
    callback(rows.insertId);
  });
};
