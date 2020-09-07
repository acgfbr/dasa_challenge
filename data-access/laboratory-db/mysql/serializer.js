const _serializeSingle = (exam) => {
    return {
        'id': exam.id,
        'name': exam.name,
        'address': exam.address,
        'status': exam.status,
        'created_at': exam.created_at,
        'updated_at': exam.updated_at
    };
  };

  
  const serializer = (data) => {
    if (!data) {
      return null
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingle)
    }
    return _serializeSingle(data)
  }
  
  module.exports = serializer
  