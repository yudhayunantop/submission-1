    const CACHE_KEY = "history_imt";
     
    function checkForStorage() {
       return typeof(Storage) !== "undefined";
    }
     
    function putHistory(data) {
       if (checkForStorage()) {
           let historyData = null;
           if (localStorage.getItem(CACHE_KEY) === null) {
               historyData = [];
           } else {
               historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
           }
     
           historyData.unshift(data);
     
           if (historyData.length > 12) {
               historyData.pop();
           }
     
           localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
       }
    }
     
    function showHistory() {
       if (checkForStorage) {
           return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
       } else {
           return [];
       }
    }
     
    function renderHistory() {
       const historyData = showHistory();
       let historyList = document.querySelector("#historyList");
       historyList.innerHTML = "";
     
       for (let history of historyData) {
           let row = document.createElement('tr');
           row.innerHTML = "<td>" + history.weight + "</td>";
           row.innerHTML += "<td>" + history.height + "</td>";
           row.innerHTML += "<td>" + history.index + "</td>";
     
           historyList.appendChild(row);
       }
    }
     
    renderHistory();