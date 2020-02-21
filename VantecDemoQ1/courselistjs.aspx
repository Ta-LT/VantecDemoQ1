<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="courselistjs.aspx.cs" Inherits="VantecDemoQ1.courselistjs" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolderHead" runat="server">
    <link href="Content/gc.spread.sheets.13.0.0.css" rel="stylesheet" />
    <script src="Scripts/excelJS/gc.spread.sheets.all.13.0.0.min.js" type="text/javascript"></script>
    <script src="Scripts/excelJS/gc.spread.sheets.resources.zh.13.0.0.min.js" type="text/javascript"></script>
    <script src="Scripts/courselistJS.js" type="text/javascript"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div class="content" style="height: 100%;">
        <div class="row" style="height: 100%;">
            <div id="ss"></div>
        </div>
        <div class="row" style="height: 100%;">
        </div>
    </div>
</asp:Content>
