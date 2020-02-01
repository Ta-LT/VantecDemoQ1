﻿var lastRowIndex = 0;
$(function () {
    $("#fileinput").change(function () {
        $("#error_screen_msg").text("");
        var reader = new FileReader();
        reader.onload = function (e) {
            try {
                var data = e.target.result;
                var workbook = XLSX.read(data, {
                    type: 'binary'
                });
                workbook.SheetNames.forEach(function (sheetName) {
                    var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                    //var json_object = JSON.stringify(XL_row_object);
                    for (let i = XL_row_object.length - 1; i--; i >= 0) {
                        addnewcourserow(XL_row_object[i]);
                    }
                    console.log(XL_row_object);
                })
            } catch (ex) {
                console.log(ex);
                $("#error_screen_msg").text(ex);
            }
        };
        reader.onerror = function (ex) {
            console.log(ex);
            $("#error_screen_msg").text(ex);
        };
        reader.readAsBinaryString($("#fileinput")[0].files[0]);
    });
    $("#addnewrow").click(function () {
        addnewcourserow();
    });
    $("#" + btnSubmitId).click(function () {
        var isInputValid = true;
        $("#courserows input:text").removeClass("input-validation-error");
        $.each($("#courserows input:text"), function (index, item) {
            var $item = $(item);
            if (!$item.val()) {
                isInputValid = false;
                $item.addClass("input-validation-error");
            }
            if ($item.attr("data-itemtype") == "postcode") {
                if (!/\d{3}-\d{4}/.test($item.val()) || $item.val().length != 8) {
                    isInputValid = false;
                    $item.addClass("input-validation-error");
                }
            }
            if ($item.attr("data-itemtype") == "number") {
                if (!isNaN(parseInt($item.val()))) {
                    $item.val(parseInt($item.val()));
                }
                else {
                    isInputValid = false;
                    $item.addClass("input-validation-error");
                }
            }
        });
        if (!isInputValid || $("#courserows input:text").length == 0) return false;
    });
})

function addnewcourserow(coursedata) {
    var allTextFilled = true;
    $("#topcourserow input:text").removeClass("input-validation-error");
    $.each($("#topcourserow input[data-required='true']"), function (inputIndex, inputItem) {
        if ($(inputItem).val() == "") {
            allTextFilled = false;
            $(inputItem).addClass("input-validation-error");
        }
    });
    if (!allTextFilled && !coursedata) {
        return;
    }

    if (coursedata) {
        $("#topcourserow input:text[data-dataname=sender]").val(coursedata["輸送会社"]);
        $("#topcourserow input:text[data-dataname=fromname]").val(coursedata["出荷元名称"]);
        $("#topcourserow input:text[data-dataname=fromadds]").val(coursedata["出荷元住所"]);
        $("#topcourserow input:text[data-dataname=frompostcode]").val(coursedata["出荷元郵便番号"]);
        $("#topcourserow input:text[data-dataname=toname]").val(coursedata["納入先名称"]);
        $("#topcourserow input:text[data-dataname=toadds]").val(coursedata["納入先住所"]);
        $("#topcourserow input:text[data-dataname=topostcode]").val(coursedata["納入先郵便番号"]);

        var distance = coursedata["距離(公里)"] ? coursedata["距離(公里)"] : Math.floor((Math.random() * 100) + 11);
        $("#topcourserow input:text[data-dataname=distance]").val(distance);
        $("#topcourserow input:text[data-dataname=senderprice]").val(coursedata["原価(円)"] ? coursedata["原価(円)"] : distance * 70);
        $("#topcourserow input:text").removeClass("input-validation-error");
    }
    else {
        if ($("#topcourserow input:text[data-dataname=distance]").val() == "") {
            $("#topcourserow input:text[data-dataname=distance]").val(Math.floor((Math.random() * 100) + 11));
        }
        if ($("#topcourserow input:text[data-dataname=senderprice]").val() == "") {
            $("#topcourserow input:text[data-dataname=senderprice]").val($("#topcourserow input:text[data-dataname=distance]").val() * 70);
        }
    }
    var newcorserow = $("#topcourserow > div.row").clone(false);
    $.each(newcorserow.find("input:text[data-dataname]"), function (index, item) {
        $(item).attr("name", $(item).attr("data-dataname") + lastRowIndex);
    });
    lastRowIndex++;
    $("#lastRowIndex").val(lastRowIndex);
    newcorserow.find("button#addnewrow").remove();
    newcorserow.find("button").click(function () {
        newcorserow.remove();
    }).css("display", "block");
    $("#courserows").prepend(newcorserow);
    $("#topcourserow input:text").val("");
    $("#topcourserow input:text").removeClass("input-validation-error");
}