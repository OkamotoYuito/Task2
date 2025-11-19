import { useEffect, useState } from "react";
import { fetchRecords } from "./database/fetchRecords";
import { supabase } from "./database/supabase";

export const App = () => {
  const [records, setRecords] = useState([]);
  const [title, setTitle] = useState("");
  const [time, setTime] = useState(0);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadRecords = async () => {
      try {
        const data = await fetchRecords();
        setRecords(data || []);
      } catch (err) {
      } finally {
        setIsLoading(false);
      }
    };
    loadRecords();
  }, []);

  const totalTime = records.reduce(
    (total, item) => total + parseInt(item.time),
    0
  );

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeTime = (e) => {
    setTime(e.target.value);
  };

  const onClickResister = async () => {
    if (title === "" || time <= 0) return setError(true);
    await supabase.from("study-record").insert({ title, time });
    const newRecords = [...records, { title, time }];
    setRecords(newRecords);
    setTitle("");
    setTime(0);
    setError(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        {isLoading && <h1>Loading</h1>}
        <h1>学習記録一覧</h1>
        <div>
          学習内容
          <input type="text" value={title} onChange={onChangeTitle} />
        </div>
        <div>
          学習時間
          <input type="number" value={time} onChange={onChangeTime} />
          時間
        </div>
        <div>入力されている学習内容：{title}</div>
        <div>入力されている学習時間：{time}時間</div>
        {records.map((record, index) => (
          <div key={index}>
            {record.title} {record.time}時間
          </div>
        ))}
        <button onClick={onClickResister}>登録</button>
        <div>合計時間：{totalTime} / 1000 (h)</div>
        {error && <p style={{ color: "red" }}>入力内容にエラーがあります</p>}
      </>
    );
  }
};
