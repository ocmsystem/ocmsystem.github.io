function create_menu_item(item_name, caption)
{
	var item_page = item_name + ".htm";
	document.write("<a class=\"menu_item\" href=\"" + item_page +"\" name=\"" + item_name + "\">" + caption + "</a>");
}

function create_main_menu()
{
	create_menu_item("index", "Домой");
	create_menu_item("articles", "Статьи");
}
