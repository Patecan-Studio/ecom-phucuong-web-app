export const fetchData = (setData: any) => {
    fetch("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json", {
      method: "GET",
    //   headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);

      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
