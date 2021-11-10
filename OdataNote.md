葵花寶典
https://docs.google.com/viewer?url=https://github.com/ptxmotc/PTX_Web/blob/master/Swagger%E6%9C%8D%E5%8B%99%E8%AA%AA%E6%98%8E%E4%B8%8A%E5%82%B3%E5%8F%83%E8%80%83%E6%AA%94%E6%A1%88/%E5%85%AC%E5%85%B1%E9%81%8B%E8%BC%B8%E6%95%B4%E5%90%88%E8%B3%87%E8%A8%8A%E5%B9%B3%E5%8F%B0%E8%B3%87%E6%96%99%E6%9C%8D%E5%8B%99%E9%96%8B%E7%99%BC%E5%AF%A6%E4%BD%9C.pdf?raw=true

*字串contains
fetchData("Tourism/Activity?$filter=contains(參數, '')&$format=JSON");

*日期吻合
fetchData("Tourism/Activity?$filter=date(StartTime) eq 2021-11-13 &$format=JSON");

*filrer 複合查詢-而且，用 and 連接
fetchData(`Tourism/Activity?$filter=year(StartTime) eq 2021 and month(StartTime) eq 11&$format=JSON`)

*filter 複合查詢-或是，用or連結
fetchData(`Tourism/Activity?$filter=year(StartTime) eq 2021 and month(StartTime) eq 11 or month(StartTime) eq 12&$format=JSON`)