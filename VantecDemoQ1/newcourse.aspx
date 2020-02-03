<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="newcourse.aspx.cs" Inherits="VantecDemoQ1.newcourse" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolderHead" runat="server">
    <script src="Scripts/newcourse.js" type="text/javascript"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD8MLqCo98BkkZJ8KZIms3osqSoi4pdt3c&callback=initMap&region=JP"
        async defer></script>
    <script src="Scripts/jszip.js"></script>
    <script src="Scripts/xlsx.js"></script>
    <script type="text/javascript">
        var btnSubmitId = "<%= btnSubmit.ClientID %>";
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <section class="content" style="height: 100%;">
        <div id="map" style="height:0px;width:0px;"></div>
        <div class="box box-default" style="height: calc(100% - 10px);">
            <div class="box-header with-border">
                <h3 class="box-title" style="padding-right: 20px;">他社向けテンプレート(Excel):</h3>
                <h3 class="box-title">
                    <input type="file" id="fileinput" /></h3>
                <div class="box-tools pull-right">
                    <asp:Button runat="server" ID="btnSubmit" Text="送信" CssClass="btn" OnClick="btnSubmit_Click" />
                    <button type="button" class="btn" id="btnGetDistance">距離と料金を計算する</button>
                    <input type="hidden" name="lastRowIndex" id="lastRowIndex" value="" />
                </div>
            </div>
            <div class="box-body" style="height: calc(100% - 30px);">
                <div style="color: red;" id="error_screen_msg"></div>
                <div class="route" style="height: calc(100% - 10px);">
                    <div class="row box-service" style="height: 100%;">
                        <div class="col-md-12 box_order_item" style="height: 100%;">
                            <div class="order-orderitem" id="topcourserow">
                                <div class="row">
                                    <div class="col-md-1">
                                        <div class="order-form-group">
                                            <label for="frompostcode">輸送会社</label>
                                            <span class="label_required">*</span>
                                            <input class="form-control input-sm" type="text" value="" data-required="true" data-dataname="sender">
                                        </div>
                                    </div>
                                    <div class="col-md-1">
                                        <div class="order-form-group">
                                            <label for="frompostcode">出荷元名称</label>
                                            <span class="label_required">*</span>
                                            <input class="form-control input-sm" type="text" value="" data-required="true" data-dataname="fromname">
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="order-form-group">
                                            <label for="frompostcode">出荷元住所</label>
                                            <span class="label_required">*</span>
                                            <input class="form-control input-sm" type="text" value="" data-required="true" data-dataname="fromadds">
                                        </div>
                                    </div>
                                    <div class="col-md-1">
                                        <div class="order-form-group">
                                            <label for="frompostcode">出荷元郵便番号</label>
                                            <span class="label_required">*</span>
                                            <input class="form-control input-sm" type="text" value="" data-itemtype="postcode" data-required="true" data-dataname="frompostcode">
                                        </div>
                                    </div>
                                    <div class="col-md-1">
                                        <div class="order-form-group">
                                            <label for="frompostcode">納入先名称</label>
                                            <span class="label_required">*</span>
                                            <input class="form-control input-sm" type="text" value="" data-required="true" data-dataname="toname">
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="order-form-group">
                                            <label for="frompostcode">納入先住所</label>
                                            <span class="label_required">*</span>
                                            <input class="form-control input-sm" type="text" value="" data-required="true" data-dataname="toadds">
                                        </div>
                                    </div>
                                    <div class="col-md-1">
                                        <div class="order-form-group">
                                            <label for="frompostcode">納入先郵便番号</label>
                                            <span class="label_required">*</span>
                                            <input class="form-control input-sm" type="text" value="" data-itemtype="postcode" data-required="true" data-dataname="topostcode">
                                        </div>
                                    </div>
                                    <div class="col-md-1">
                                        <div class="order-form-group">
                                            <label for="frompostcode">原価(円)</label>
                                            <input class="form-control input-sm" type="text" value="" data-itemtype="number" data-dataname="senderprice">
                                        </div>
                                    </div>
                                    <div class="col-md-1">
                                        <div class="order-form-group">
                                            <label for="frompostcode">距離(km)</label>
                                            <input class="form-control input-sm" type="text" value="" data-itemtype="number" data-dataname="distance">
                                        </div>
                                    </div>
                                    <div class="col-md-1">
                                        <div class="order-form-group">
                                            <label for="frompostcode"></label>
                                            <div class="center-block">
                                                <button id="addnewrow" type="button" class="btn" style="display: block; height: 30px; padding: 4px 12px; margin: auto;"><i class="fa fa-plus"></i></button>
                                                <button type="button" class="btn" style="display: block; height: 30px; padding: 4px 12px; margin: auto; display: none;"><i class="fa fa-minus"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="order-orderitem" id="courserows" style="height: calc(100% - 100px); overflow-y: auto; overflow-x: hidden;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</asp:Content>
