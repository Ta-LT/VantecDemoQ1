<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="pricing.aspx.cs" Inherits="VantecDemoQ1.pricing" %>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolderHead" runat="server">
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD8MLqCo98BkkZJ8KZIms3osqSoi4pdt3c&callback=initMap&region=JP"
        async defer></script>
    <script src="/Scripts/pricing.js"></script>
</asp:Content>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <div class="content" style="height: 100%;">
        <div class="row" style="height: 100%;">
            <div class="col-lg-4">
                <div class="form-group">
                    <div class="row">
                        <div class="col-lg-8">
                            <input type="text" class="form-control" id="txtLoadFromAdds" name="txtLoadFromAdds" placeholder="发货地邮编" aria-label="发货地邮编" aria-describedby="btnLoadFromAdds">
                        </div>
                        <div class="col-lg-4">
                            <button class="btn btn-warning" type="button" id="btnLoadFromAdds">作为发货地</button>
                        </div>
                    </div>
                    <small id="fromAdds" class="form-text text-muted"></small>
                    <input type="hidden" name="hffromAdds" id="hffromAdds" />
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col-lg-8">
                            <input type="text" class="form-control" id="txtLoadToAdds" name="txtLoadToAdds" placeholder="收货地邮编" aria-label="收货地邮编" aria-describedby="btnLoadToAdds">
                        </div>
                        <div class="col-lg-4">
                            <button class="btn btn-warning" type="button" id="btnLoadToAdds">作为收货地</button>
                        </div>
                    </div>
                    <small id="toAdds" class="form-text text-muted"></small>
                    <input type="hidden" name="hftoAdds" id="hftoAdds" />
                </div>
                <div class="form-group">
                    <label for="fromlocation">盒子选择</label>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-lg-4">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" checked="checked">
                                <label class="form-check-label" for="inlineRadio1">标准</label>
                            </div>
                            <div class="col-lg-4">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2">
                                <label class="form-check-label" for="inlineRadio2">其他</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="packageNo">数量选择</label>
                    <select class="form-control" id="packageNo" name="packageNo">
                        <option selected>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-warning btn-lg btn-block" id="btnPrice">概算料金确认</button>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="priceoutput" name="priceoutput" style="display: none; text-align: right;" readonly="readonly">
                </div>
                <div class="form-group" id="submit">
                    <button type="submit" class="btn btn-warning btn-lg btn-block" id="btnSubmit" style="display: none;">发注</button>
                </div>
            </div>
            <div class="col-lg-8" style="height: 100%">
                <div id="map" style="height: 100%"></div>
            </div>
        </div>
    </div>

</asp:Content>
