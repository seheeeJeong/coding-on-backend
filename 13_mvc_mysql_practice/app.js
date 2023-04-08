const express = require("express");
const app = express();
const PORT = 8001;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true })); // 객체 형태로 전달된 데이터 내에서 또 다른 중첩된 객체를 허용 (false는 허용하지 않음)
app.use(express.json());

// [라우터 분리]
const userRouter = require("./routes/user"); // 분기마다 구분해 놓은 Router들의 집합 레포
app.use("/user", userRouter); // '/user'가 호출될 시 userRouter를 실행하도록 선언 // callback 인자에 express.Router() 오브젝트를 생성하여 넣음으로 라우터 단계에서의 URL 제어도 가능 하도록 등록

// [404 error] 맨 마지막 라우트로 선언 -> 나머지 코드 무시되기 때문!!
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/user`);
});
