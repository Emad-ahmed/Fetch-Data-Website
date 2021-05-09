
document.getElementById('tire5_five').addEventListener('click', latest_data);

function latest_data() {
    fetch('http://webapi19sa-1.course.tamk.cloud/v1/weather/rain/719')
        .then(response => response.json())
        .then(data => {

        var output =
        `<tr>
        <th class="table-active">Row Number</th>
            <th class="table-active">Date</th>
            <th class="table-active">Time (UTC/GMT +3 hours)</th>
            <th class="table-active">Temperature</th>
        </tr>`


            
            for (i = 0; i < data.length; i++){
                console.log(i)
                var sum = 0
                var length = data.length
                var total = sum += data[i].rain
                var average23 = total / length;
            output +=
                    `<tr class="tableRow">
                    <td class="tableData">${i+1}</td>
                        <td class="tableData">${data[i].date_time.slice(0,10).split('-').reverse().join('/')}</td>
                        <td class="tableData">${data[i].date_time.slice(11,19)}</td>
                        <td class="tableData">${data[i].rain.slice(0,7)}</td>
  
                    </tr>`
            }
            document.getElementById('table25').innerHTML = output;
            document.getElementById('average23').innerHTML = average23;
        });

        
        var xmlhttp = new XMLHttpRequest();
    var url = "http://webapi19sa-1.course.tamk.cloud/v1/weather/rain/719";
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
    xmlhttp.onload = function() {
        if(this.status == 200){
            var data = JSON.parse(this.responseText);
            var time = data.map(function(elem){
                return elem.date_time.split('T')[1].split('.')[0];
            });
            var value = data.map(function(elem){
                return elem.rain;
            });
            ////
            var ctx = document.getElementById('myChart23').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: time,
                    datasets: [{
                        label: 'Rain',
                        data: value,
                        backgroundColor: 'blue',
                        borderColor: 'grey',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    }
}

