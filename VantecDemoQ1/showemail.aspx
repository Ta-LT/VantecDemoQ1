<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="showemail.aspx.cs" Inherits="VantecDemoQ1.showemail" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolderHead" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <br />
    宛先:<br />
    荷主様メールアドレス<br />
    CC:<br />
    スペ待ち事務局(メーリングリスト)＆ 輸送会社<br />
    件名:<br />
    スペ待ち配車内容のご連絡<br />
    <br />
    スペ待ちをご利用頂き誠にありがとうございます。<br />
    ご依頼頂きましたお荷物に関しまして以下、配車内容をご連絡させて頂きます。<br />
    <a href="neworder.aspx?orderid=<%= order.Id%>">https://konsaibiz.vantecgl.com:10443/Orders?orderid=<%= order.Id%></a><br />
    ■伝票番号 <%= DateTime.Now.Ticks.ToString() %><br />
    ■パレットNo <%= DateTime.Now.AddDays(5).Ticks.ToString() %><br />
    ■集荷先郵便番号 <%= order.frompostcode %><br />
    ■集荷先住所 <%= order.fromadds %><br />
    ■集荷先日時 <%= order.pickupdate.HasValue ? order.pickupdate.Value.ToString("yyyy年MM月dd日 HH:mm") : ""%><br />
    ■納入先郵便番号 <%= order.topostcode %><br />
    ■納入先住所 <%= order.toadds %><br />
    ■納入先日時 <%= order.dropoffdate.HasValue ? order.dropoffdate.Value.ToString("yyyy年MM月dd日 HH:mm") : "" %><br />
    ■輸送会社名 <%= order.sender %><br />
    ■運営会社<br />
    株式会社バンテック<br />
    ■お問い合わせ電話＆メール<br />
    045-306-5226 (スペまちコールセンター)<br />
    vtc-konsai-biz@vantec-gl.com<br />
</asp:Content>
