const TAGS = {
    OPEN: "{{",
    CLOSE: "}}"
};

const CUSTOM_FORMAT = {
    OPEN: "{***",
    CLOSE: "***}"
}

const FORMAT_TYPE = {
    LINK: "link",
    BOLD: "bold"
}

export const getHighlighted = (text) => {
    return text.replaceAll(TAGS.OPEN, "<span class=\"primary-text\">")
        .replaceAll(TAGS.CLOSE, "</span>");
}

export const getFormattedTag = (text) => {
    console.log(`text is ${text}`);
    const customRegex = /\{\*\*\*(.(?!\{\*\*))*\*\*\*\}/g;
    const customPatterns = text.match(customRegex);
    const children = [];
    let index = 0;
    console.log(`customPatterns is ${customPatterns}`);
    if (!customPatterns) {
        return text;
    }
    customPatterns.forEach(pattern => {
        const curIndex = text.indexOf(pattern);
        const textTillPattern = text.slice(index, curIndex);
        children.push(textTillPattern);
        const valuesStr = pattern.slice(4,pattern.length - 4);
        const values = {};
        valuesStr.split(";").forEach(keyValue => {
            const [key, value] = keyValue.split("=");
            values[key] = value;
        });
        const {text: displayText, type} = values;
        let formattedText;
        if (type === FORMAT_TYPE.LINK) {
            formattedText = <a href={values.link}>{displayText}</a>;
        } else if (type === FORMAT_TYPE.BOLD) {
            formattedText = <span className="primary-text">{displayText}</span>
        }
        children.push(formattedText);
        index = curIndex + pattern.length;
    });
    const textAfterAllPatterns = text.slice(index, text.length);
    children.push(textAfterAllPatterns);
    return <div>{children}</div>
}
