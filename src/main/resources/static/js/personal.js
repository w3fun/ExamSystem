window.onload = function() {
    // Highcharts.chart('skillMap', {
    //     chart: {
    //         polar: true,
    //         type: 'area'
    //     },
    //     title: {
    //         text: '你的技能图谱',
    //         x: -55,
    //         color: '#5f5f5f',
    //         fontSize: "15px"
    //     },
    //     pane: {
    //         size: '70%'
    //     },
    //     xAxis: {
    //         categories: ['HTML/CSS', 'JavaScript', 'C', 'Java'],
    //         tickmarkPlacement: 'on',
    //         lineWidth: 0
    //     },
    //     yAxis: {
    //         gridLineInterpolation: 'polygon',
    //         lineWidth: 0,
    //         min: 0
    //     },
    //     tooltip: {
    //         shared: true,
    //         style: { // 文字内容相关样式
    //             fontSize: "13px",
    //             fontWeight: "blod",
    //             fontFamily: "Courir new"
    //         }
    //     },
    //     legend: {
    //         align: 'right',
    //         verticalAlign: 'top',
    //         y: 70,
    //         layout: 'vertical'
    //     },
    //     series: [{
    //         name: '已完成题数',
    //         data: [120, 230, 0, 3],
    //         pointPlacement: 'on',
    //         color: '#0275d8',
    //         tooltip: {
    //             pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    //         }
    //     }, {
    //         name: '正确率',
    //         data: [86, 76, 76, 70],
    //         pointPlacement: 'on',
    //         color: '#5cb3fd',
    //         tooltip: {
    //             pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}%</b><br/>'
    //         }
    //     }]
    // });

    pageFinished();
};

function pageFinished() {
    var btnHover = [].slice.call(document.getElementsByClassName('btn-hover-show'));
    console.log(btnHover);
    var parentOfBtnHover = btnHover.map(function(item) {
        return item.parentNode;
    });
    console.log(parentOfBtnHover);

    for (var i = 0; i < parentOfBtnHover.length; i++) {
        (function(i) {
            EventUtil.addHandler(parentOfBtnHover[i], 'mouseover', function() {
                parentOfBtnHover[i].lastElementChild.style.display = 'block';
            });
            EventUtil.addHandler(parentOfBtnHover[i], 'mouseout', function() {
                parentOfBtnHover[i].lastElementChild.style.display = 'none';
            });
        }(i));
    }
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1/personalInfo',
        dataType: 'json',
        success: function (data) {
            console.log(JSON.parse(data));
        },
        error: function (err) {
            console.log('err' + err);
        }
    })
}