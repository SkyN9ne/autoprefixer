const flexSpec = require('./flex-spec');
const Declaration = require('../declaration');

class FlexShrink extends Declaration {

    static initClass() {
        this.names = ['flex-shrink', 'flex-negative'];
    }

    /**
     * Return property name by final spec
     */
    normalize() {
        return 'flex-shrink';
    }

    /**
     * Return flex property for 2012 spec
     */
    prefixed(prop, prefix) {
        let spec;
        [spec, prefix] = flexSpec(prefix);
        if (spec === 2012) {
            return prefix + 'flex-negative';
        } else {
            return super.prefixed(prop, prefix);
        }
    }

    /**
     * Ignore 2009 spec and use flex property for 2012
     */
    set(decl, prefix) {
        let spec;
        [spec, prefix] = flexSpec(prefix);
        if (spec === 2012 || spec === 'final') {
            return super.set(decl, prefix);
        }
        return undefined;
    }

}

FlexShrink.initClass();

module.exports = FlexShrink;