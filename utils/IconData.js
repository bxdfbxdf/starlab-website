class IconDataContainer {
    constructor(name, url, iconName) {
        this.name = name;
        this.url = url, 
        this.iconName = iconName
    }
}

const IconData = {
    'reddit': new IconDataContainer('link to starlab on reddit', 'reddit.com/r/starlab', 'fab fa-reddit'),
    'facebook': new IconDataContainer("link to starlab's youtube channel", 'youtube.com/@starlab',  'fab fa-youtube'),

}


export default IconData