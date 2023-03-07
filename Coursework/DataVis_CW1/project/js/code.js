function addHeatMap(){
    map.addSource('TU_station', {
        type: 'vector',
        url: 'mapbox://jack-xia.clewxl17e1unf2ojvv4kxp2be-3zndk'
    });


    map.addLayer({
        id: 'heatmap_station',
        type: 'heatmap',
        source: 'TU_station',
        'source-layer': 'station_withpop',
        maxzoom: 20,
        'layout': {
            // Make the layer visible by default.
            'visibility': 'none'
        },
        paint: {
        // increase weight as diameter breast height increases
            'heatmap-weight': {
                property: 'total_pop',
                type: 'exponential',
                stops: [
                    [1,0],
                    [150281, 1]
                ]
            },
        // increase intensity as zoom level increases
            'heatmap-intensity': {
                stops: [
                    [11, 1],
                    [15, 3]
                ]
            },
        // assign color values be applied to points depending on their density
            'heatmap-color': [
                'interpolate',
                ['linear'],
                ['heatmap-density'],
                0, 'rgba(236,222,239,0)',
                0.2, 'rgb(208,209,230)',
                0.4, 'rgb(166,178,219)',
                0.6, 'rgb(188,103,207)',
                0.8, 'rgba(215,14,14,0.76)'
            ],
        // increase radius as zoom increases
            'heatmap-radius': {
                stops: [
                    [1,1],
                    [5,10],
                    [11, 70],
                    [15, 200],
                ]
            },
        // decrease opacity to transition into the circle layer
            'heatmap-opacity': {
                default: 1,
                stops: [
                    [10, 1],
                    [15, 0.2]
                ]
            },
        }
    }, '');


}

function changeHeatMapvisibility(){
    const visibility = map.getLayoutProperty('heatmap_station','visibility');
    if (visibility === 'visible') {
        map.setLayoutProperty('heatmap_station', 'visibility', 'none');
    } else {
        map.setLayoutProperty('heatmap_station','visibility','visible');
    }
}
// constant
function hide_block(id){
    document.getElementById(id).style.visibility='hidden';
}

function show_block(id){
    document.getElementById(id).style.visibility='visible';
}

function change_visibility(id){
    var state = document.getElementById(id).style.visibility;
    var legend_state = document.getElementById('legend').style.visibility;
    if(id!='barChartBlock'){
        switch (state){
            case 'visible':
                hide_block(id);
                break;
            case 'hidden':
                show_block(id);
                break;
            default:
                break;
        }
    }else {
        if(legend_state=="visible"&&state=='hidden'){
            hide_block('legend');
            show_block(id);
        }else if (legend_state=='hidden'&&state=="visible"){
            show_block('legend');
            hide_block(id);
        }
    }
}

function sing(){
    var song = ['We\'re no strangers to love','You know the rules and so do I','A full commitment\'s what I\'m thinking of','You wouldn\'t get this from any other guy',
        'I just wanna tell you how I\'m feeling','Gotta make you understand','Never gonna give you up','never gonna let you down','Never gonna run around and desert you',
        'Never gonna make you cry','never gonna say goodbye','Never gonna tell a lie and hurt you~'];
    console.warn(song[flag]);
    if (flag>11){flag=0}else {flag = flag+1;};
    setTimeout('sing()',2500);
}

function zoom_to(ds){
    var location;
    switch (ds){
        case 'Oxford Circus':
            location=[51.515308,-0.14208];
            break;
        case 'King\'s Cross St. Pancras':
            location=[51.530605,-0.122944];
            break;
        case 'Victoria LU':
            location=[51.496358,-0.143229];
            break;
        case 'Green Park':
            location=[51.506557,-0.143119];
            break;
        case 'Bank and Monument':
            location=[51.51345,-0.08899];
            break;
        default:
            location=[-0.13, 51.53];
            break;
    }
    map.flyTo({
        center: [location[1],location[0]],
        zoom: 15,
    });
}

function reset(){
    map.flyTo({
        center: [-0.13, 51.53],
        zoom: 11, // starting zoom
        bearing: 0,
        pitch: 0,
    });
}




