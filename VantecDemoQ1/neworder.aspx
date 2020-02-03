<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="neworder.aspx.cs" Inherits="VantecDemoQ1.neworder" EnableEventValidation="false" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolderHead" runat="server">
    <script src="/Scripts/neworder.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <input id="orderid" name="orderid" type="hidden" value="">
    <section class="content">
        <div class="box box-default">
            <div class="box-header with-border">
                <h3 class="box-title"><b>配達依頼登録</b></h3>
                <div class="box-tools pull-right">
                    <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                </div>
            </div>
            <!-- ---- row 1 ---- -->
            <div class="box-body" style="">
                <div id="error_screen_msg"></div>
                <div class="route">
                    <div class="row box-service">
                        <div class="col-md-12 box_order_item">
                            <div class="order-orderitem">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="order-address">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="order-form-group">
                                                        <label for="frompostcode">集荷先郵便番号</label>
                                                        <input class="form-control input-sm frompostcode" id="frompostcode" name="frompostcode" type="text" value="<%= order.frompostcode %>" readonly="readonly">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="order-form-group">
                                                        <label for="fromadds">集荷先住所</label>
                                                        <span class="label_required">*</span>
                                                        <input class="form-control input-sm fromadds" data-val="true" data-val-length="集荷先住所 は最大200桁で入力してください。" data-val-length-max="200" data-val-required="集荷先住所 を入力してください。" id="fromadds" name="fromadds" placeholder="大型車が入場できる住所を記載ください" type="text" value="<%= order.fromadds %>">
                                                        <span class="field-validation-valid" data-valmsg-for="fromadds" data-valmsg-replace="true"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="order-form-group">
                                                        <label for="topostcode">納品先郵便番号</label>
                                                        <input class="form-control input-sm topostcode" id="topostcode" name="topostcode" type="text" value="<%= order.topostcode %>" readonly="readonly">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="order-form-group">
                                                        <label for="toadds">納品先住所</label>
                                                        <span class="label_required">*</span>
                                                        <input class="form-control input-sm toadds" data-val="true" data-val-length="納品先住所 は最大200桁で入力してください。" data-val-length-max="200" data-val-required="納品先住所 を入力してください。" id="toadds" name="toadds" type="text" value="<%= order.toadds %>">
                                                        <span class="field-validation-valid" data-valmsg-for="toadds" data-valmsg-replace="true"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="order-form-group">
                                                        <label for="packagetype">パレット種類</label>
                                                        <input class="form-control input-sm" type="text" id="packagetype" name="packagetype" value="<%= order.packagetype == "1" ? "パレット" : "その他" %>" readonly="readonly">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                    <div class="col-md-8">
                                        <div class="order-pallet order-pallet-client">
                                            <div class="row">
                                                <div class="col-md-2">
                                                    <div class="order-form-group">
                                                        <label class="cut-text" style="text-overflow: inherit;">パレット数<span class="label_required">*</span></label>
                                                        <input class="form-control input-sm quantity num-input" data-val="true" data-val-number="The field パレット数 must be a number." data-val-range="パレット数は1～1000を入力してください。" data-val-range-max="1000" data-val-range-min="1" data-val-regex="パレット数 は数値を入力してください。" data-val-regex-pattern="^[0-9]*$" data-val-required="パレット数 を入力してください。" id="packageamount" name="packageamount" type="text" value="<%= order.packageamount.ToString() %>"  readonly="readonly">
                                                        <span class="field-validation-valid" data-valmsg-for="packageamount" data-valmsg-replace="true"></span>
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="order-form-group">
                                                        <label class="cut-text">奥行(cm) <span class="label_required">*</span></label>
                                                        <input class="form-control input-sm sizevalidate num-input" data-val="true" data-val-number="The field 奥行 must be a number." data-val-range="奥行は1～2147483647を入力してください。" data-val-range-max="2147483647" data-val-range-min="1" data-val-regex="奥行 は数値を入力してください。" data-val-regex-pattern="^[0-9]*$" data-val-required="奥行 を入力してください。" id="length" name="length" type="text" value="<%= order.length.ToString() %>">
                                                        <span class="field-validation-valid" data-valmsg-for="length" data-valmsg-replace="true"></span>
                                                        <span class="sizeerror"></span>
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="order-form-group">
                                                        <label class="cut-text">横幅(cm) <span class="label_required">*</span></label>
                                                        <input class="form-control input-sm sizevalidate num-input" data-val="true" data-val-number="The field 横幅 must be a number." data-val-range="横幅は1～2147483647を入力してください。" data-val-range-max="2147483647" data-val-range-min="1" data-val-regex="横幅 は数値を入力してください。" data-val-regex-pattern="^[0-9]*$" data-val-required="横幅 を入力してください。" id="width" name="width" type="text" value="<%= order.width.ToString() %>">
                                                        <span class="field-validation-valid" data-valmsg-for="width" data-valmsg-replace="true"></span>
                                                        <span class="sizeerror"></span>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="order-form-group">
                                                        <label class="cut-text">高さ(cm) <span class="label_required">*</span></label>
                                                        <input class="form-control input-sm sizevalidate num-input" data-val="true" data-val-number="The field 高さ must be a number." data-val-range="高さは1～2147483647を入力してください。" data-val-range-max="2147483647" data-val-range-min="1" data-val-regex="高さ は数値を入力してください。" data-val-regex-pattern="^[0-9]*$" data-val-required="高さ を入力してください。" id="height" name="height" type="text" value="<%= order.height.ToString() %>">
                                                        <span class="field-validation-valid" data-valmsg-for="height" data-valmsg-replace="true"></span>
                                                        <span class="sizeerror"></span>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="order-form-group">
                                                        <label class="cut-text">1PLの重量(kg)<span class="label_required">*</span></label>
                                                        <input class="form-control input-sm num-input sizevalidate2" data-val="true" data-val-number="The field 重量 must be a number." data-val-range="重量は1～2147483647を入力してください。" data-val-range-max="2147483647" data-val-range-min="1" data-val-regex="重量 は数値を入力してください。" data-val-regex-pattern="^[0-9]*$" data-val-required="重量 を入力してください。" id="weight" name="weight" type="text" value="<%= order.weight.ToString() %>">
                                                        <span class="field-validation-valid" data-valmsg-for="weight" data-valmsg-replace="true"></span>
                                                        <span class="sizeerror"></span>
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="order-form-group">
                                                        <label class="cut-text" for="DataList_0__OrderItems_0__LstPallet_0__ProductName">荷物種類</label>
                                                        <input class="form-control input-sm" data-val="true" data-val-length="荷物種類 は最大200桁で入力してください。" data-val-length-max="200" id="goodskind" name="goodskind" type="text" value="<%= order.goodskind %>">
                                                        <span class="field-validation-valid" data-valmsg-for="goodskind" data-valmsg-replace="true"></span>
                                                    </div>
                                                </div>

                                                <div class="col-md-3">
                                                    <div class="order-form-group">
                                                        <label class="cut-text" for="clientstartdate">集荷希望日</label>
                                                        <span class="label_required">*</span>
                                                        <input type="date" value="<%= order.clientstartdate.HasValue ? order.clientstartdate.Value.ToString("yyyy-MM-dd") : ""%>" autocomplete="off" class="form-control input-sm selectdatepicker" data-val="true" data-val-date="The field 集荷希望日 must be a date." data-val-required="集荷希望日 を入力してください。" id="clientstartdate" name="clientstartdate">
                                                        <span class="field-validation-valid" data-valmsg-for="clientstartdate" data-valmsg-replace="true"></span>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="order-form-group">
                                                        <label class="cut-text" for="clientstarttime">集荷希望時間</label>
                                                        <input class="form-control time-picker timepicker flatpickr-input" data-val="true" data-val-length="集荷希望時間 は最大10桁で入力してください。" data-val-length-max="10" id="clientstarttime" name="clientstarttime" style="padding: 5px 12px; height: 30px;" type="time" value="<%= order.clientstartdate.HasValue ? order.clientstartdate.Value.ToString("HH:mm") : "" %>">
                                                        <span class="field-validation-valid" data-valmsg-for="clientstarttime" data-valmsg-replace="true"></span>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="order-form-group">
                                                        <label class="cut-text">備考</label>
                                                        <input class="form-control input-sm" data-val="true" data-val-length="備考 は最大500桁で入力してください。" data-val-length-max="500" id="clientnote" name="clientnote" type="text" value="<%= order.clientnote %>">
                                                        <span class="field-validation-valid" data-valmsg-for="clientnote" data-valmsg-replace="true"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <div class="order-form-group">
                                                        <label class="cut-text" for="clientenddate">納品予定日</label><span class="label_required">*</span>
                                                        <span class="order-lbl-control clsDueDate">
                                                            <input value="<%= order.clientenddate.HasValue ? order.clientenddate.Value.ToString("yyyy-MM-dd") : ""%>" autocomplete="off" class="form-control input-sm selectdatepickerDueDate" data-val="true" data-val-date="The field 納品予定日 must be a date." data-val-required="納品予定日 を入力してください。" id="clientenddate" name="clientenddate" type="date">
                                                            <span class="field-validation-valid" data-valmsg-for="clientenddate" data-valmsg-replace="true"></span>
                                                            <span class="field-validation-error delevery-date" style="display: none" data-valmsg-replace="true">
                                                                <span class="field-validation-msg">「納品日」は「集荷日」以降の日付を指定して下さい。
                                                                </span>
                                                            </span>

                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="order-form-group">
                                                        <label class="pallet-chk cut-text" for="packagedep">荷役の依頼</label><br>
                                                        <input class="form-control input-sm chk3" id="packagedep" name="packagedep" type="checkbox" value="true" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;" <%= string.IsNullOrEmpty(order.packagedep) ? "" : "checked=\"checked\"" %>>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-10">
                                                    <div class="order-form-group">
                                                        <br>
                                                        <label>運賃:&nbsp;</label><span class="palletAmount"><%= order.price.ToString() + "円" %></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row" <%= !order.state.HasValue ? "style=\"display:none;\"" : "" %>>
                                    <div class="col-md-4"></div>
                                    <div class="col-md-8">
                                        <div class="order-pallet order-pallet-admin">
                                            <div class="row">
                                                <div class="col-md-12 bg-primary" style="text-align: center;">
                                                    配車内容
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="order-form-group">
                                                        <label for="txtLoadToPostcode">輸送会社名</label>
                                                        <input class="form-control input-sm" type="text" name="sender" value="<%= order.sender %>">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <div class="order-form-group">
                                                        <label for="txtLoadToPostcode">運転員名</label>
                                                        <input class="form-control input-sm" type="text" name="driver" value="<%= order.driver %>">
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="order-form-group">
                                                        <label for="txtLoadToPostcode">車番</label>
                                                        <input class="form-control input-sm" type="text" name="trucknumber" value="<%= order.trucknumber %>">
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="order-form-group">
                                                        <label for="txtLoadToPostcode">車種</label>
                                                        <input class="form-control input-sm" type="text" name="trucktype" value="<%= order.trucktype %>">
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="order-form-group">
                                                        <label for="txtLoadToPostcode">連絡先</label>
                                                        <input class="form-control input-sm" type="text" name="driverphonenumber" value="<%= order.driverphonenumber %>">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <div class="order-form-group">
                                                        <label for="txtLoadToPostcode">集荷日時(予定)</label>
                                                        <input class="form-control input-sm" type="date" name="pickupdate" value="<%= order.pickupdate.HasValue ? order.pickupdate.Value.ToString("yyyy-MM-dd") : "" %>">
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="order-form-group">
                                                        <label for="txtLoadToPostcode"></label>
                                                        <input class="form-control input-sm" type="time" name="pickuptime" value="<%= order.pickupdate.HasValue ? order.pickupdate.Value.ToString("HH:mm") : "" %>">
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="order-form-group">
                                                        <label for="txtLoadToPostcode">納入日時(予定)</label>
                                                        <input class="form-control input-sm" type="date" name="dropoffdate" value="<%= order.dropoffdate.HasValue ? order.dropoffdate.Value.ToString("yyyy-MM-dd") : "" %>">
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="order-form-group">
                                                        <label for="txtLoadToPostcode"></label>
                                                        <input class="form-control input-sm" type="time" name="dropofftime" value="<%= order.dropoffdate.HasValue ? order.dropoffdate.Value.ToString("HH:mm") : "" %>">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="order-form-group">
                                                        <label for="txtLoadToPostcode">備考</label>
                                                        <input class="form-control input-sm" type="text" name="note" value="<%= order.note %>">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3">
                                    </div>
                                    <div class="col-md-9">
                                        <asp:Button runat="server" ID="btnSubmit" Text="" CssClass="btn btn-primary pull-right submitorconfirm" OnClick="btnSubmit_Click" CausesValidation="False" />
                                        <input type="hidden" id="orderState" value="<%= order.state %>"" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</asp:Content>
