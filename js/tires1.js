document.getElementById('tire1').addEventListener('click', latest_data);




function latest_data() {
    fetch('http://webapi19sa-1.course.tamk.cloud/v1/weather')
        .then(response => response.json())
        .then(data => {

            var length = data.slice(0, 50);

            
            
            var output =
                `<tr>
            <th class="table-active">Row Number</th>
            <th class="table-active">Date</th>
            <th class="table-active">Time (UTC/GMT +3 hours)</th>
            <th class="table-active">Measurement Type</th>
            <th class="table-active">Values</th>
        </tr>`


            // console.log(data[0].data);

            for (i = 0; i < length.length; i++) {
                
                output +=
                    `<tr class="tableRow">
                        <td class="tableData">${i+1}</td>
                        <td class="tableData">${length[i].date_time.slice(0,10).split('-').reverse().join('/')}</td>
                        <td class="tableData">${length[i].date_time.slice(11,19)}</td>
                        <td class="tableData">${Object.keys(length[i].data)}</td>
                        <td class="tableData">${Math.round(Object.values(length[i].data) * 100) / 100}</td>
                    </tr>`
            }
            document.getElementById('table1').innerHTML = output;
            
        });
}




function searchfun() {
    fetch('http://webapi19sa-1.course.tamk.cloud/v1/weather')
        .then(response => response.json())
        .then(data => {

            var length = data.slice(0, 200);
            
            var output =
                `<tr>
            <th class="table-active">Row Number</th>
            <th class="table-active">Date</th>
            <th class="table-active">Time (UTC/GMT +3 hours)</th>
            <th class="table-active">Measurement Type</th>
            <th class="table-active">Values</th>
        </tr>`


            // console.log(data[0].data);

            for (i = 0; i < length.length; i++) {
                var value = Object.keys(length[i].data);
                myinput = document.getElementById('myinput').value;
                if(value == myinput){
                output +=
                    `<tr class="tableRow">
                        <td class="tableData">${i+1}</td>
                        <td class="tableData">${length[i].date_time.slice(0,10).split('-').reverse().join('/')}</td>
                        <td class="tableData">${length[i].date_time.slice(11,19)}</td>
                        <td class="tableData">${Object.keys(length[i].data)}</td>
                        <td class="tableData">${Math.round(Object.values(length[i].data) * 100) / 100}</td>
                    </tr>`
                }
            }
            
            document.getElementById('table1').innerHTML = output;
            
            
        });
}
