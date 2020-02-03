<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="orders.aspx.cs" Inherits="VantecDemoQ1.orders1" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolderHead" runat="server">
    <style>
        table {
            padding: 10px;
            width: calc(100% - 20px);
            width: -webkit-fill-available;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <section class="content">
        <div class="box box-default">
            <div class="row">
                <div class="col-md-12">
                    <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" CellPadding="4" DataSourceID="LinqDataSource1" ForeColor="#333333" GridLines="None" OnSelectedIndexChanged="GridView1_SelectedIndexChanged">
                        <AlternatingRowStyle BackColor="White" />
                        <Columns>
                            <asp:BoundField DataField="fromadds" HeaderText="集荷先住所" ReadOnly="True" SortExpression="fromadds" />
                            <asp:BoundField DataField="frompostcode" HeaderText="集荷先郵便番号" ReadOnly="True" SortExpression="frompostcode" />
                            <asp:BoundField DataField="toadds" HeaderText="納入先住所" ReadOnly="True" SortExpression="toadds" />
                            <asp:BoundField DataField="topostcode" HeaderText="納入先郵便番号" ReadOnly="True" SortExpression="topostcode" />
                            <asp:BoundField DataField="packageamount" HeaderText="パレット数" ReadOnly="True" SortExpression="packageamount" />
                            <asp:BoundField DataField="price" HeaderText="運賃" ReadOnly="True" SortExpression="price" />
                            <asp:BoundField DataField="pickupdate" HeaderText="集荷日時(予定)" ReadOnly="True" SortExpression="pickupdate" />
                            <asp:BoundField DataField="dropoffdate" HeaderText="納入日時(予定)" ReadOnly="True" SortExpression="dropoffdate" />
                            <asp:TemplateField ShowHeader="False">
                                <ItemTemplate>
                                    <asp:Button ID="Button1" runat="server" CausesValidation="False" CommandArgument='<%# Eval("Id") %>' Text="選択" OnClick="Button1_Click" />
                                </ItemTemplate>
                            </asp:TemplateField>
                        </Columns>
                        <EditRowStyle BackColor="#2461BF" />
                        <FooterStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
                        <HeaderStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
                        <PagerStyle BackColor="#2461BF" ForeColor="White" HorizontalAlign="Center" />
                        <RowStyle BackColor="#EFF3FB" />
                        <SelectedRowStyle BackColor="#D1DDF1" Font-Bold="True" ForeColor="#333333" />
                        <SortedAscendingCellStyle BackColor="#F5F7FB" />
                        <SortedAscendingHeaderStyle BackColor="#6D95E1" />
                        <SortedDescendingCellStyle BackColor="#E9EBEF" />
                        <SortedDescendingHeaderStyle BackColor="#4870BE" />
                    </asp:GridView>
                    <asp:LinqDataSource ID="LinqDataSource1" runat="server" ContextTypeName="VantecDemoQ1.DataClassesDataContext" EntityTypeName="" Select="new (fromadds, frompostcode, toadds, topostcode, packageamount, price, pickupdate, dropoffdate, Id)" TableName="orders">
                    </asp:LinqDataSource>
                </div>
            </div>
        </div>
    </section>

</asp:Content>
