class CreditCardField extends Component {
  static defaultProps = {
    name: 'cc-number',
    placeholder: 'xxxx xxxx xxxx xxxx',
    required: false,
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
  }

  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  // This method is declared using an arrow function initializer solely
  // to guarantee its binding, as we cannot use decorators just yet.
  handleChange = ({ target: { value } }) => {
    value = value
      // Remove all non-digits
      .replace(/\D+/, '')
      // Stick to first 16, ignore later digits
      .slice(0, 16)
      // Add a space after any 4-digit group followed by more digits
      .replace(/(\d{4})(?=\d)/g, '$1 ')
    this.setState({ value })
  }

  render() {
    const { name, placeholder, required } = this.props
    return (
      <input
        autocomplete="cc-number"
        name={name}
        onChange={this.handleChange}
        placeholder={placeholder}
        required={required}
        type="text"
        value={this.state.value}
      />
    )
  }
}
