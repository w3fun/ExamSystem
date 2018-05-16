import '../scss/admin.scss';

class Admin {
    constructor() {
        this.$navTab = $('.navbar-nav');
        this.$conTab = $('.con-item');
        this.$moreBtn = $('.btn-more');
        this.$moreBlock = $('.more');
        this.$list = $('.list-group');
        this.$listCon = $('.list-con');

        this.$examTitle = $('#chooseTitle');
        this.$examType = $('#chooseType');
        this.$examYear = $('#chooseYear');
        this.$examMonth = $('#chooseMonth');
        this.$examDay = $('#chooseDay');
        this.$examTime = $('#chooseTime');
        this.$examLoc = $('#chooseLoc');
        this.$basicBtn = $('#basicBtn');

        this.$qTitle = $('#questionDesc');
        this.$qType = $('#questionType');
        this.$qScore = $('#questionScore');
        this.$qChoice = $('.questionChoice');
        this.$qBtn = $('.questionBtn');

        this.$examInfo = $('.exam-info');
        this.$submit = $('.btn-submit');

        this.exam = {
            basic: null,
            question: []
        };
    }

    init() {
        this.tab();
        this.getMore();
        this.listTab();
        this.basicBtnClick();
        this.qBtnClick();
        this.submit();
    }

    tab() {
        this.$navTab.on('click', e => {
            e.preventDefault();
            const $target = $(e.target);
            const index = $target.index('.nav-link');
            if (index !== 2) {
                const children = this.$navTab.children().toArray().map(item => {
                    return $(item).children();
                })
                children.forEach(item => {
                    if ($(item).hasClass('active')) {
                        $(item).removeClass('active');
                    }
                });
                $target.addClass('active');
                this.$conTab.toArray().forEach((item, idx) => {
                    $(item).hide();
                    if (index === idx) {
                        $(item).show();
                    }
                })
            }
        });
    }

    getMore() {
        this.$moreBtn.toArray().forEach((item, index) => {
            if (index === 0) {
                $(item).on('click', e => {
                    e.preventDefault();
                    const $target = $(e.target).parent().find('.card-title');
                    const $title = this.$moreBlock.find('.h4');
                    $title.text($target.text());
                    this.$moreBlock.hide();
                    $.get('/api/examd-detail')
                        .done(data => {
                            data = JSON.parse(data);
                            const res = data.data;
                            if (data.ret && res) {
                                const chart = Highcharts.chart('more-content', res);
                            }
                        })
                    this.$moreBlock.show();  
                })
            } else if (index === 1) {
                $(item).on('click', e => {
                    e.preventDefault();
                    const $target = $(e.target).parent().find('.card-title');
                    const $title = this.$moreBlock.find('.h4');
                    $title.text($target.text());
                    this.$moreBlock.hide();
                    $.get('/api/exam-sign-detail')
                        .done(data => {
                            data = JSON.parse(data);
                            const res = data.data;
                            if (data.ret && res) {
                                const chart = Highcharts.chart('more-content', res);
                            }
                        })
                    this.$moreBlock.show();
                })
            } else {
                $(item).on('click', e => {
                    e.preventDefault();
                    const $target = $(e.target).parent().find('.card-title');
                    const $title = this.$moreBlock.find('.h4');
                    $title.text($target.text());
                    this.$moreBlock.hide();
                    $.get('/api/exam-categroy')
                        .done(data => {
                            data = JSON.parse(data);
                            const res = data.data;
                            if (data.ret && res) {
                                const chart = Highcharts.chart('more-content', res);
                            }
                        })
                    this.$moreBlock.show();
                })
            }
        })
    }

    listTab() {
        this.$list.on('click', e => {
            e.preventDefault();
            const $target = $(e.target);
            const index = $target.index();
            this.$list.children().toArray().forEach(item => {
                if ($(item).hasClass('active')) {
                    $(item).removeClass('active');
                }
            });
            $target.addClass('active');
            this.$listCon.toArray().forEach((item, idx) => {
                $(item).hide();
                if (index === idx) {
                    $(item).show();
                }
            })
        })
    }

    basicBtnClick() {
        this.$basicBtn.on('click', e => {
            e.preventDefault();
            this.exam.basic = {
                title: this.$examTitle.val(),
                type: this.$examType.val(),
                date: `${this.$examYear.val()}/${this.$examMonth.val()}/${this.$examDay.val()}`,
                time: this.$examTime.val(),
                loc: this.$examLoc.val()
            }
            alert('提交成功');
            this.clear();
        })
    }

    qBtnClick() {
        this.$qBtn.on('click', e => {
            e.preventDefault();
            let type = this.$qType.val();
            if (type === '单选') {
                type = 'radio'
            } else if (type === '多选') {
                type = 'checkbox'
            } else {
                type = 'other';
            }
            this.exam.question.push({
                title: this.$qTitle.val(),
                type: type,
                score: this.$qScore.val(),
                choice: this.$qChoice.toArray().map(item => {
                    return $(item).val();
                })
            });
            console.log(this.exam);
            this.renderExamInfo();
            alert('添加成功')
            this.clear()
        })
    }

    renderExamInfo() {
        let score = 0;
        let len = this.exam.question.length;
        for (let i = 0; i < len; i++) {
            score += parseInt(this.exam.question[i].score);
        }
        let arr = [
            `试卷名称：${this.exam.basic.title}`,
            `考试时间：${this.exam.basic.date} ${this.exam.basic.time}`,
            `考试地点：${this.exam.basic.loc}`,
            `试题数量：${len}`,
            `试题总分：${score}`
        ]
        this.$examInfo.children().toArray().forEach((item, index) => {
            $(item).text(arr[index]);
        });
    }

    clear() {
        $('.qform').find('input').toArray().forEach(item => {
            $(item).val('');
        });
        $('.qform').find('select').toArray().forEach(item => {
            $(item).children().toArray().forEach((item, index) => {
                if ($(item).attr('selected')) {
                    $(item).removeAttr('selected');
                }
                if (index === 0) {
                    $(item).attr('selected', 'true')
                }
            })
        })
    }

    submit() {
        if (this.exam.basic && this.exam.question.length) {
            this.$submit.removeClass('disabled').removeAttr('disabled');
            this.$submit.on('click', e => {
                e.preventDefault();
                $.post('/api/exam-add', JSON.stringify(this.exam))
                    .done(data => {
                        data = JSON.parse(data);
                        if (data.ret && data.data.status === 'OK') {
                            alert('提交成功')
                        }
                    })
            });
        }
    }
}

$(document).ready(function() {
    const admin = new Admin();
    admin.init();
})