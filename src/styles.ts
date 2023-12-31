import { css } from 'lit'

export default css`

.truncate {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.card-content > div {
    margin-bottom: 8px;
}
.card-content > div:last-child {
    margin-bottom: 0;
}

.entity-spacing:first-child {
    margin-top: 0;
}
.entity-spacing:last-child {
    margin-bottom: 0;
}

.entity-row {
    display: flex;
    align-items: center;
}
.entity-row .name {
    flex: 1;
    margin: 0 6px;
}
.entity-row .secondary {
    color: var(--primary-color);
}
.entity-row .icon {
    flex: 0 0 40px;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    margin-right: 10px;
}

.moon-img-svg {
    width: 40px;
    height: 40px;
}

`