### Performance 

# Deduplication 

Components with the same swr key and are rendered almost at the same time, only one network request will be made  

# Deep Comparison 

Swr compares data changes by default, if the data value ins't changed, a re-render will not be triggered

### Options 

# Suspense 

Data is always the fetch response

# revalidateOnMount, revalidateOnFocus, revalidateOnReconnect

Automatically revalidate when necessary (user controll)

# refreshInterval 

Automatically revalidate at a time interval

# shouldRetryOnError 

Automatically retry on error 

### Dev experience 
# Conditional Fetching 

Some fetches may need a value that another request provides

# Error 

Errors are easy to handle and can make code cleaner (no try catch statements)