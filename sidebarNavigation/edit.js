const body = document.body

const addHover = (node) => {
    node.addEventListener('mouseenter', () => {
        node.classList.add('hovered')
    })
    node.addEventListener('mouseleave', () => {
        node.classList.remove('hovered')
    })
}

const navigation = document.createElement("nav");
navigation.className = "navigation";
addHover(navigation)

const ICON_COMMON_CLASS = 'fa-brands'
const linksData = [
    {
        spanText: 'Instagram',
        iconClass: 'fa-instagram'
    },
    {
        spanText: 'Facebook',
        iconClass: 'fa-facebook'
    },
    {
        spanText: 'Twitter',
        iconClass: 'fa-twitter'
    },
    {
        spanText: 'Linkedin',
        iconClass: 'fa-linkedin'
    },
]

linksData.forEach(({ spanText, iconClass }) => {
    const link = document.createElement("a")
    link.className = "navigation__network"
    addHover(link)

    const span = document.createElement('span')
    span.innerText = spanText
    span.className = 'navigation__network-text'

    const icon = document.createElement("i")
    icon.className = `${ICON_COMMON_CLASS} ${iconClass} navigation__network-icon`

    link.append(span, icon)
    navigation.append(link);
})

body.append(navigation);
