const $container=$('.gallery-wrap');
const $loadMoreBtn=$('.loadMoreBt');
let $addItemCount = 3;
let $added=0;
let $allData=[];

$.getJSON("./data/video.json", function(data) {    
    $allData=data;
    //console.log($allData);
    addItem();
    //console.log(a);
    $loadMoreBtn.click(addItem)
});

function addItem(data) {
    let element = [];
    let slicedData;

    slicedData=$allData.slice($added, $added += $addItemCount);
    //console.log(slicedData);
    $.each(slicedData, function(index, item) {
        const fileExtension = item.video.split('.').pop().toLowerCase();
        //console.log(fileExtension);
        const isMp4 = fileExtension === 'mp4'

        const sw = isMp4 ? (`<video autoplay muted loop src=${item.video}></video>`) : (`<img src=${item.video} />`)
        
        let itemHTML = `
            <li>
                <div>
                    <a href="javascript:" class="galleryBt">
                        <span class="g-video">
                            ${sw}
                        </span>
                        <span class="g-color"></span>
                        <span class="g-title">
                            <span><strong>${item.title}</strong></span>
                            <span><b>${item.description}</b></span>
                            <span><i class="exploreBt">Explore</i></span>
                        </span>

                    </a>
                </div>
            </li>
        `;

        element.push($(itemHTML).get(0)); // DOM 객체로 만들어 넣어야된다.

        if( $added < $allData.length ) {
            $loadMoreBtn.text('Load More');
        } else {
            $loadMoreBtn.text('End');
        }

    });

    $container.append(element);

    
}
