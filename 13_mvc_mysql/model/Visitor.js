// (임시) DB로부터 방명록 데이터를 받아옴
exports.getVisitors = () => {
  return [
    { id: 1, name: "홍길동", comment: "내가 왔다." },
    { id: 2, name: "이찬혁", comment: "으라차차" },
  ];
};
