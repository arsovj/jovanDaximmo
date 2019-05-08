//<![CDATA[
var JAMapOptions1 = { "api_version": "2", "context_menu": 1, "to_location": "Brussels", "target_lat": 50.8839256, "target_lon": 4.4479941, "to_location_info": "Culliganlaan 1 B1831 Brussels (Diegem)Belgium", "to_location_changeable": 0, "from_location": "", "map_width": 1040, "map_height": 390, "maptype": "normal", "maptype_control_display": 1, "maptype_control_style": "drop_down", "maptype_control_position": "TR", "toolbar_control_display": 1, "toolbar_control_style": "default", "toolbar_control_position": "TL", "display_layer": "none", "display_scale": 1, "display_overview": 1, "zoom": 15, "api_key": "AIzaSyC8YR4nOaEuY25rXL2ClTiY0-aYZQRbXWg", "sensor": 0, "display_popup": 0, "popup_width": 640, "popup_height": 480, "popup_type": "highslide", "map_styles": "" };
var objWidgetMap1 = new JAWidgetMap('ja-widget-map1', JAMapOptions1);
var objWidgetMapPopup1;

window.addEvent('domready', function () {
    objWidgetMap1.displayMap('', '', false);
});