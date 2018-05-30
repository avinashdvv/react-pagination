##  pagination-with-react


## Installation
Run the following command:
`npm install pagination-with-react`

## Usage

# Props:
```
  totalItems [required]
  numberOfItemsPerPage  [required]
  numberOfPagesPerScreen [required]
  totalNumberOfPages = round(totalItems / numberOfItemsPerPage); [required]
  totalScreensNumber = round(totalNumberOfPages / numberOfPagesPerScreen); [required]
  onPageButtonClick [required]
  currentActiveIndex [required]

```

# Basic Example

```
  <ReactPagination 
    totalScreensNumber={totalScreensNumber}
    totalNumberOfPages={totalNumberOfPages}
    numberOfPagesPerScreen={numberOfPagesPerScreen}
    onPageButtonClick={(data) => {
      this.setState({
        data,
      })
    }}
    currentActiveIndex={this.state.id}
  >
    {this.state.data}
  </ReactPagination>

```