export default function OrgIcon(props) {
    const { orgLink, name, iconCss, svgComponent } = props;
    const className = "logo-link col-sm-4 col-md-3 col-lg-2 px-1 " + iconCss;
    return (
        <a href={orgLink} className={className} style={{height: 25+'px'}}>
            <img src={svgComponent} alt={name} />
        </a>
    )
}