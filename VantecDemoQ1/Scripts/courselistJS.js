var spread;
var sheet;
var spreadNS;
$(function () {
    //initialize SpreadJS widget
    spread = new GC.Spread.Sheets.Workbook($("#ss")[0]);
    sheet = spread.getActiveSheet();
    spreadNS = GC.Spread.Sheets;
    spread.commandManager().register("saveall",
        {
            canUndo: false,
            execute: function (context, options, isUndo) {
                var Commands = GC.Spread.Sheets.Commands;
                options.cmd = "saveall";
                saveChanges();
                return true;
            }
        });
    spread.contextMenu.menuData.push({
        text: "Save",
        name: "saveall",
        command: "saveall",
        workArea: "viewportcolHeaderrowHeaderslicercorner"
    })
    readData(function (data) {
        var filter = new spreadNS.Filter.HideRowFilter(new spreadNS.Range(0, 0, data.length - 1, 9));
        sheet.rowFilter(filter);
    });
});

function readData(callback) {
    $.getJSON("courselistjs.aspx?action=readall", function (data) {
        if (data) {
            sheet.suspendPaint();
            var columnInfos = [
                { name: "sender", displayName: "輸送会社", size: 100 },
                { name: "fromname", displayName: "出荷元名称", size: 100 },
                { name: "fromadds", displayName: "出荷元住所", size: 140 },
                { name: "frompostcode", displayName: "出荷元郵便番号", size: 100 },
                { name: "toname", displayName: "納入先名称", size: 100 },
                { name: "toadds", displayName: "納入先住所", size: 100 },
                { name: "topostcode", displayName: "納入先郵便番号", size: 100 },
                { name: "senderprice", displayName: "原価(円)", size: 100 },
                { name: "distance", displayName: "距離(km)", size: 100 }
            ];
            sheet.autoGenerateColumns = false;
            sheet.setDataSource(data);
            sheet.bindColumns(columnInfos);
            var defaultStyle = new spreadNS.Style();
            defaultStyle.hAlign = spreadNS.HorizontalAlign.left;
            defaultStyle.vAlign = spreadNS.VerticalAlign.center;
            defaultStyle.font = "10pt consola";
            sheet.setDefaultStyle(defaultStyle);
            sheet.getCell(-1, 7).hAlign(spreadNS.HorizontalAlign.right);
            sheet.getCell(-1, 8).hAlign(spreadNS.HorizontalAlign.right);
            sheet.defaults.rowHeight = 25;
            sheet.resumePaint();

            if (callback) {
                callback(data);
            }
        }
    });
}

function saveChanges() {
    var dirtyRows = sheet.getDirtyRows();
    var dirtyItems = [];
    for (var i = 0; i < dirtyRows.length; i++) {
        dirtyItems[i] = dirtyRows[i].item;
    }

    var deletedRows = sheet.getDeletedRows();
    var deletedIds = [];
    $.each(deletedRows, function (rowIndex, rowItem) {
        deletedIds.push(rowItem.originalItem.Id);
    })

    //sheet.clearPendingChanges();
    updateEditedRows(dirtyItems, function () {
        deleteRemovedRows(deletedIds);
    });
}

function updateEditedRows(changedRowsData, callback) {
    if (changedRowsData.length > 0) {
        $.ajax({
            url: "courselistjs?action=update",
            type: "POST",
            data: JSON.stringify(changedRowsData),
            dataType: "json",
            contentType: "application/json,charset=UTF-8",
            success: callback
        });
    }
    else {
        if (typeof callback == "function") {
            callback();
        }
    }

}
function deleteRemovedRows(deletedRowIds, callback) {
    if (deletedRowIds.length > 0) {
        $.ajax({
            url: "courselistjs?action=delete",
            type: "POST",
            data: JSON.stringify(deletedRowIds),
            dataType: "json",
            contentType: "application/json,charset=UTF-8",
            success: callback
        });
    }
    else {
        if (typeof callback == "function") {
            callback();
        }
    }
}