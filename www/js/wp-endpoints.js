{
    "name": "Conferencia Nacional de Organizaciones Afrocolombianas",
    "description": "",
    "url": "http:\/\/convergenciacnoa.org",
    "home": "http:\/\/convergenciacnoa.org",
    "gmt_offset": "0",
    "timezone_string": "",
    "namespaces": ["wp\/v2", "oembed\/1.0", "contact-form-7\/v1", "yoast\/v1"],
    "authentication": [],
    "routes": {
        "\/": {
            "namespace": "",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/convergenciacnoa.org\/wp-json\/"
            }
        },
        "\/wp\/v2": {
            "namespace": "wp\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "namespace": {
                        "required": false,
                        "default": "wp\/v2"
                    },
                    "context": {
                        "required": false,
                        "default": "view"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/convergenciacnoa.org\/wp-json\/wp\/v2"
            }
        },
        "\/wp\/v2\/posts": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "P\u00e1gina actual de la colecci\u00f3n.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "N\u00famero m\u00e1ximo de elementos que se devolver\u00e1n en el conjunto de resultados.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limitar resultados a aquellos que coinciden con una cadena.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limita la respuesta a entradas publicadas despu\u00e9s de una fecha dada compatible con ISO9601.",
                        "type": "string"
                    },
                    "author": {
                        "required": false,
                        "default": [],
                        "description": "Limitar el conjunto de resultados a las publicaciones asignadas a autores espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "author_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Aseg\u00fara que el conjunto de resultados excluye las publicaciones asignadas a autores espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "before": {
                        "required": false,
                        "description": "Limita la respuesta a entradas publicadas antes de  una fecha dada compatible con ISO9601.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Asegurarse de que el conjunto de resultados excluye IDs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limitar el conjunto de resultados a IDs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Desplazar el conjunto de resultados un n\u00famero espec\u00edfico de elementos.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Orden de clasificaci\u00f3n de atributos ascendente o descendente.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["author", "date", "id", "include", "modified", "parent", "relevance", "slug", "title"],
                        "description": "Ordenar la colecci\u00f3n por atributo de objeto.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Limitar el conjunto de resultados a las entradas con uno o m\u00e1s slugs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "status": {
                        "required": false,
                        "default": "publish",
                        "description": "Limitar el conjunto de resultados a las entradas asignadas a uno o m\u00e1s estados.",
                        "type": "array",
                        "items": {
                            "enum": ["publish", "future", "draft", "pending", "private", "trash", "auto-draft", "inherit", "any"],
                            "type": "string"
                        }
                    },
                    "categories": {
                        "required": false,
                        "default": [],
                        "description": "Limitar los resultados a todos los elementos que tengan el t\u00e9rmino especificado asignado en la taxonom\u00eda categories.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "categories_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Limitar el conjunto de resultados a todos los elementos excepto a aquellos que tienen el t\u00e9rmino especificado asignado en la taxonom\u00eda categories.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "tags": {
                        "required": false,
                        "default": [],
                        "description": "Limitar los resultados a todos los elementos que tengan el t\u00e9rmino especificado asignado en la taxonom\u00eda tags.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "tags_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Limitar el conjunto de resultados a todos los elementos excepto a aquellos que tienen el t\u00e9rmino especificado asignado en la taxonom\u00eda tags.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "sticky": {
                        "required": false,
                        "description": "Limitar el conjunto de resultados a elementos que sean fijos.",
                        "type": "boolean"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "date": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, en el huso horario del sitio.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, como GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico para el objeto \u00fanico para su tipo.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private"],
                        "description": "Un nombre de estado para el objeto.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "Una contrase\u00f1a para proteger el acceso al contenido y al extracto.",
                        "type": "string"
                    },
                    "title": {
                        "required": false,
                        "description": "El t\u00edtulo para el objeto.",
                        "type": "object"
                    },
                    "content": {
                        "required": false,
                        "description": "El contenido para el objeto.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "El ID del autor del objeto.",
                        "type": "integer"
                    },
                    "excerpt": {
                        "required": false,
                        "description": "El extracto del objeto.",
                        "type": "object"
                    },
                    "featured_media": {
                        "required": false,
                        "description": "El ID de la imagen destacada para el objeto.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Si los comentarios est\u00e1n abiertos en el objeto o no.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Se puede o no hacer ping al objeto.",
                        "type": "string"
                    },
                    "format": {
                        "required": false,
                        "enum": ["standard", "aside", "chat", "gallery", "link", "image", "quote", "status", "video", "audio"],
                        "description": "El formato del objeto.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    },
                    "sticky": {
                        "required": false,
                        "description": "Sea o no el objeto debe ser tratado como fijo.",
                        "type": "boolean"
                    },
                    "template": {
                        "required": false,
                        "enum": [""],
                        "description": "El fichero del tema a usar para mostrar el objeto.",
                        "type": "string"
                    },
                    "categories": {
                        "required": false,
                        "description": "Los t\u00e9rminos asignados al objeto en la taxonom\u00eda category.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "tags": {
                        "required": false,
                        "description": "Los t\u00e9rminos asignados al objeto en la taxonom\u00eda post_tag.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                }
            }, {
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "P\u00e1gina actual de la colecci\u00f3n.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "N\u00famero m\u00e1ximo de elementos que se devolver\u00e1n en el conjunto de resultados.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limitar resultados a aquellos que coinciden con una cadena.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limita la respuesta a entradas publicadas despu\u00e9s de una fecha dada compatible con ISO9601.",
                        "type": "string"
                    },
                    "author": {
                        "required": false,
                        "default": [],
                        "description": "Limitar el conjunto de resultados a las publicaciones asignadas a autores espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "author_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Aseg\u00fara que el conjunto de resultados excluye las publicaciones asignadas a autores espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "before": {
                        "required": false,
                        "description": "Limita la respuesta a entradas publicadas antes de  una fecha dada compatible con ISO9601.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Asegurarse de que el conjunto de resultados excluye IDs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limitar el conjunto de resultados a IDs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Desplazar el conjunto de resultados un n\u00famero espec\u00edfico de elementos.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Orden de clasificaci\u00f3n de atributos ascendente o descendente.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["author", "date", "id", "include", "modified", "parent", "relevance", "slug", "title"],
                        "description": "Ordenar la colecci\u00f3n por atributo de objeto.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Limitar el conjunto de resultados a las entradas con uno o m\u00e1s slugs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "status": {
                        "required": false,
                        "default": "publish",
                        "description": "Limitar el conjunto de resultados a las entradas asignadas a uno o m\u00e1s estados.",
                        "type": "array",
                        "items": {
                            "enum": ["publish", "future", "draft", "pending", "private", "trash", "auto-draft", "inherit", "any"],
                            "type": "string"
                        }
                    },
                    "categories": {
                        "required": false,
                        "default": [],
                        "description": "Limitar los resultados a todos los elementos que tengan el t\u00e9rmino especificado asignado en la taxonom\u00eda categories.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "categories_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Limitar el conjunto de resultados a todos los elementos excepto a aquellos que tienen el t\u00e9rmino especificado asignado en la taxonom\u00eda categories.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "tags": {
                        "required": false,
                        "default": [],
                        "description": "Limitar los resultados a todos los elementos que tengan el t\u00e9rmino especificado asignado en la taxonom\u00eda tags.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "tags_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Limitar el conjunto de resultados a todos los elementos excepto a aquellos que tienen el t\u00e9rmino especificado asignado en la taxonom\u00eda tags.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "sticky": {
                        "required": false,
                        "description": "Limitar el conjunto de resultados a elementos que sean fijos.",
                        "type": "boolean"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "date": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, en el huso horario del sitio.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, como GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico para el objeto \u00fanico para su tipo.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private"],
                        "description": "Un nombre de estado para el objeto.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "Una contrase\u00f1a para proteger el acceso al contenido y al extracto.",
                        "type": "string"
                    },
                    "title": {
                        "required": false,
                        "description": "El t\u00edtulo para el objeto.",
                        "type": "object"
                    },
                    "content": {
                        "required": false,
                        "description": "El contenido para el objeto.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "El ID del autor del objeto.",
                        "type": "integer"
                    },
                    "excerpt": {
                        "required": false,
                        "description": "El extracto del objeto.",
                        "type": "object"
                    },
                    "featured_media": {
                        "required": false,
                        "description": "El ID de la imagen destacada para el objeto.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Si los comentarios est\u00e1n abiertos en el objeto o no.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Se puede o no hacer ping al objeto.",
                        "type": "string"
                    },
                    "format": {
                        "required": false,
                        "enum": ["standard", "aside", "chat", "gallery", "link", "image", "quote", "status", "video", "audio"],
                        "description": "El formato del objeto.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    },
                    "sticky": {
                        "required": false,
                        "description": "Sea o no el objeto debe ser tratado como fijo.",
                        "type": "boolean"
                    },
                    "template": {
                        "required": false,
                        "enum": [""],
                        "description": "El fichero del tema a usar para mostrar el objeto.",
                        "type": "string"
                    },
                    "categories": {
                        "required": false,
                        "description": "Los t\u00e9rminos asignados al objeto en la taxonom\u00eda category.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "tags": {
                        "required": false,
                        "description": "Los t\u00e9rminos asignados al objeto en la taxonom\u00eda post_tag.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/convergenciacnoa.org\/wp-json\/wp\/v2\/posts"
            }
        },
        "\/wp\/v2\/posts\/(?P<id>[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "La contrase\u00f1a para la entrada si est\u00e1 protegida por contrase\u00f1a.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "date": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, en el huso horario del sitio.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, como GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico para el objeto \u00fanico para su tipo.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private"],
                        "description": "Un nombre de estado para el objeto.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "Una contrase\u00f1a para proteger el acceso al contenido y al extracto.",
                        "type": "string"
                    },
                    "title": {
                        "required": false,
                        "description": "El t\u00edtulo para el objeto.",
                        "type": "object"
                    },
                    "content": {
                        "required": false,
                        "description": "El contenido para el objeto.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "El ID del autor del objeto.",
                        "type": "integer"
                    },
                    "excerpt": {
                        "required": false,
                        "description": "El extracto del objeto.",
                        "type": "object"
                    },
                    "featured_media": {
                        "required": false,
                        "description": "El ID de la imagen destacada para el objeto.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Si los comentarios est\u00e1n abiertos en el objeto o no.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Se puede o no hacer ping al objeto.",
                        "type": "string"
                    },
                    "format": {
                        "required": false,
                        "enum": ["standard", "aside", "chat", "gallery", "link", "image", "quote", "status", "video", "audio"],
                        "description": "El formato del objeto.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    },
                    "sticky": {
                        "required": false,
                        "description": "Sea o no el objeto debe ser tratado como fijo.",
                        "type": "boolean"
                    },
                    "template": {
                        "required": false,
                        "enum": [""],
                        "description": "El fichero del tema a usar para mostrar el objeto.",
                        "type": "string"
                    },
                    "categories": {
                        "required": false,
                        "description": "Los t\u00e9rminos asignados al objeto en la taxonom\u00eda category.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "tags": {
                        "required": false,
                        "description": "Los t\u00e9rminos asignados al objeto en la taxonom\u00eda post_tag.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Si evitar la papelera y forzar la eliminaci\u00f3n.",
                        "type": "boolean"
                    }
                }
            }, {
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "La contrase\u00f1a para la entrada si est\u00e1 protegida por contrase\u00f1a.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "date": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, en el huso horario del sitio.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, como GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico para el objeto \u00fanico para su tipo.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private"],
                        "description": "Un nombre de estado para el objeto.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "Una contrase\u00f1a para proteger el acceso al contenido y al extracto.",
                        "type": "string"
                    },
                    "title": {
                        "required": false,
                        "description": "El t\u00edtulo para el objeto.",
                        "type": "object"
                    },
                    "content": {
                        "required": false,
                        "description": "El contenido para el objeto.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "El ID del autor del objeto.",
                        "type": "integer"
                    },
                    "excerpt": {
                        "required": false,
                        "description": "El extracto del objeto.",
                        "type": "object"
                    },
                    "featured_media": {
                        "required": false,
                        "description": "El ID de la imagen destacada para el objeto.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Si los comentarios est\u00e1n abiertos en el objeto o no.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Se puede o no hacer ping al objeto.",
                        "type": "string"
                    },
                    "format": {
                        "required": false,
                        "enum": ["standard", "aside", "chat", "gallery", "link", "image", "quote", "status", "video", "audio"],
                        "description": "El formato del objeto.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    },
                    "sticky": {
                        "required": false,
                        "description": "Sea o no el objeto debe ser tratado como fijo.",
                        "type": "boolean"
                    },
                    "template": {
                        "required": false,
                        "enum": [""],
                        "description": "El fichero del tema a usar para mostrar el objeto.",
                        "type": "string"
                    },
                    "categories": {
                        "required": false,
                        "description": "Los t\u00e9rminos asignados al objeto en la taxonom\u00eda category.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "tags": {
                        "required": false,
                        "description": "Los t\u00e9rminos asignados al objeto en la taxonom\u00eda post_tag.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Si evitar la papelera y forzar la eliminaci\u00f3n.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/posts\/(?P<parent>[\\d]+)\/revisions": {
            "namespace": "wp\/v2",
            "methods": ["GET", "GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "El ID del superior del objeto.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["GET"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "El ID del superior del objeto.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wp\/v2\/posts\/(?P<parent>[\\d]+)\/revisions\/(?P<id>[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "DELETE", "GET", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "El ID del superior del objeto.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "El ID del superior del objeto.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Se requiere que sea true, ya que las revisiones no son compatibles con el env\u00edo a la papelera.",
                        "type": "boolean"
                    }
                }
            }, {
                "methods": ["GET"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "El ID del superior del objeto.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "El ID del superior del objeto.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Se requiere que sea true, ya que las revisiones no son compatibles con el env\u00edo a la papelera.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/pages": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "P\u00e1gina actual de la colecci\u00f3n.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "N\u00famero m\u00e1ximo de elementos que se devolver\u00e1n en el conjunto de resultados.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limitar resultados a aquellos que coinciden con una cadena.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limita la respuesta a entradas publicadas despu\u00e9s de una fecha dada compatible con ISO9601.",
                        "type": "string"
                    },
                    "author": {
                        "required": false,
                        "default": [],
                        "description": "Limitar el conjunto de resultados a las publicaciones asignadas a autores espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "author_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Aseg\u00fara que el conjunto de resultados excluye las publicaciones asignadas a autores espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "before": {
                        "required": false,
                        "description": "Limita la respuesta a entradas publicadas antes de  una fecha dada compatible con ISO9601.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Asegurarse de que el conjunto de resultados excluye IDs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limitar el conjunto de resultados a IDs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "menu_order": {
                        "required": false,
                        "description": "Limita los resultados a entradas con un valor espec\u00edfico menu_order.",
                        "type": "integer"
                    },
                    "offset": {
                        "required": false,
                        "description": "Desplazar el conjunto de resultados un n\u00famero espec\u00edfico de elementos.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Orden de clasificaci\u00f3n de atributos ascendente o descendente.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["author", "date", "id", "include", "modified", "parent", "relevance", "slug", "title", "menu_order"],
                        "description": "Ordenar la colecci\u00f3n por atributo de objeto.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "default": [],
                        "description": "Limitar los resultados a los que tengan IDs superiores concretos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "parent_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Limitar los resultados a todos los elementos excepto aquellos con un identificador padre espec\u00edfico.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "slug": {
                        "required": false,
                        "description": "Limitar el conjunto de resultados a las entradas con uno o m\u00e1s slugs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "status": {
                        "required": false,
                        "default": "publish",
                        "description": "Limitar el conjunto de resultados a las entradas asignadas a uno o m\u00e1s estados.",
                        "type": "array",
                        "items": {
                            "enum": ["publish", "future", "draft", "pending", "private", "trash", "auto-draft", "inherit", "any"],
                            "type": "string"
                        }
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "date": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, en el huso horario del sitio.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, como GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico para el objeto \u00fanico para su tipo.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private"],
                        "description": "Un nombre de estado para el objeto.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "Una contrase\u00f1a para proteger el acceso al contenido y al extracto.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "El ID del superior del objeto.",
                        "type": "integer"
                    },
                    "title": {
                        "required": false,
                        "description": "El t\u00edtulo para el objeto.",
                        "type": "object"
                    },
                    "content": {
                        "required": false,
                        "description": "El contenido para el objeto.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "El ID del autor del objeto.",
                        "type": "integer"
                    },
                    "excerpt": {
                        "required": false,
                        "description": "El extracto del objeto.",
                        "type": "object"
                    },
                    "featured_media": {
                        "required": false,
                        "description": "El ID de la imagen destacada para el objeto.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Si los comentarios est\u00e1n abiertos en el objeto o no.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Se puede o no hacer ping al objeto.",
                        "type": "string"
                    },
                    "menu_order": {
                        "required": false,
                        "description": "El orden del objeto en relaci\u00f3n con otro objeto de su tipo.",
                        "type": "integer"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    },
                    "template": {
                        "required": false,
                        "enum": ["page-template-blank.php", ""],
                        "description": "El fichero del tema a usar para mostrar el objeto.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "P\u00e1gina actual de la colecci\u00f3n.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "N\u00famero m\u00e1ximo de elementos que se devolver\u00e1n en el conjunto de resultados.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limitar resultados a aquellos que coinciden con una cadena.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limita la respuesta a entradas publicadas despu\u00e9s de una fecha dada compatible con ISO9601.",
                        "type": "string"
                    },
                    "author": {
                        "required": false,
                        "default": [],
                        "description": "Limitar el conjunto de resultados a las publicaciones asignadas a autores espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "author_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Aseg\u00fara que el conjunto de resultados excluye las publicaciones asignadas a autores espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "before": {
                        "required": false,
                        "description": "Limita la respuesta a entradas publicadas antes de  una fecha dada compatible con ISO9601.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Asegurarse de que el conjunto de resultados excluye IDs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limitar el conjunto de resultados a IDs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "menu_order": {
                        "required": false,
                        "description": "Limita los resultados a entradas con un valor espec\u00edfico menu_order.",
                        "type": "integer"
                    },
                    "offset": {
                        "required": false,
                        "description": "Desplazar el conjunto de resultados un n\u00famero espec\u00edfico de elementos.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Orden de clasificaci\u00f3n de atributos ascendente o descendente.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["author", "date", "id", "include", "modified", "parent", "relevance", "slug", "title", "menu_order"],
                        "description": "Ordenar la colecci\u00f3n por atributo de objeto.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "default": [],
                        "description": "Limitar los resultados a los que tengan IDs superiores concretos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "parent_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Limitar los resultados a todos los elementos excepto aquellos con un identificador padre espec\u00edfico.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "slug": {
                        "required": false,
                        "description": "Limitar el conjunto de resultados a las entradas con uno o m\u00e1s slugs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "status": {
                        "required": false,
                        "default": "publish",
                        "description": "Limitar el conjunto de resultados a las entradas asignadas a uno o m\u00e1s estados.",
                        "type": "array",
                        "items": {
                            "enum": ["publish", "future", "draft", "pending", "private", "trash", "auto-draft", "inherit", "any"],
                            "type": "string"
                        }
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "date": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, en el huso horario del sitio.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, como GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico para el objeto \u00fanico para su tipo.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private"],
                        "description": "Un nombre de estado para el objeto.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "Una contrase\u00f1a para proteger el acceso al contenido y al extracto.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "El ID del superior del objeto.",
                        "type": "integer"
                    },
                    "title": {
                        "required": false,
                        "description": "El t\u00edtulo para el objeto.",
                        "type": "object"
                    },
                    "content": {
                        "required": false,
                        "description": "El contenido para el objeto.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "El ID del autor del objeto.",
                        "type": "integer"
                    },
                    "excerpt": {
                        "required": false,
                        "description": "El extracto del objeto.",
                        "type": "object"
                    },
                    "featured_media": {
                        "required": false,
                        "description": "El ID de la imagen destacada para el objeto.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Si los comentarios est\u00e1n abiertos en el objeto o no.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Se puede o no hacer ping al objeto.",
                        "type": "string"
                    },
                    "menu_order": {
                        "required": false,
                        "description": "El orden del objeto en relaci\u00f3n con otro objeto de su tipo.",
                        "type": "integer"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    },
                    "template": {
                        "required": false,
                        "enum": ["page-template-blank.php", ""],
                        "description": "El fichero del tema a usar para mostrar el objeto.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/convergenciacnoa.org\/wp-json\/wp\/v2\/pages"
            }
        },
        "\/wp\/v2\/pages\/(?P<id>[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "La contrase\u00f1a para la entrada si est\u00e1 protegida por contrase\u00f1a.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "date": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, en el huso horario del sitio.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, como GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico para el objeto \u00fanico para su tipo.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private"],
                        "description": "Un nombre de estado para el objeto.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "Una contrase\u00f1a para proteger el acceso al contenido y al extracto.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "El ID del superior del objeto.",
                        "type": "integer"
                    },
                    "title": {
                        "required": false,
                        "description": "El t\u00edtulo para el objeto.",
                        "type": "object"
                    },
                    "content": {
                        "required": false,
                        "description": "El contenido para el objeto.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "El ID del autor del objeto.",
                        "type": "integer"
                    },
                    "excerpt": {
                        "required": false,
                        "description": "El extracto del objeto.",
                        "type": "object"
                    },
                    "featured_media": {
                        "required": false,
                        "description": "El ID de la imagen destacada para el objeto.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Si los comentarios est\u00e1n abiertos en el objeto o no.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Se puede o no hacer ping al objeto.",
                        "type": "string"
                    },
                    "menu_order": {
                        "required": false,
                        "description": "El orden del objeto en relaci\u00f3n con otro objeto de su tipo.",
                        "type": "integer"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    },
                    "template": {
                        "required": false,
                        "enum": ["page-template-blank.php", ""],
                        "description": "El fichero del tema a usar para mostrar el objeto.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Si evitar la papelera y forzar la eliminaci\u00f3n.",
                        "type": "boolean"
                    }
                }
            }, {
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "La contrase\u00f1a para la entrada si est\u00e1 protegida por contrase\u00f1a.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "date": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, en el huso horario del sitio.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, como GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico para el objeto \u00fanico para su tipo.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private"],
                        "description": "Un nombre de estado para el objeto.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "Una contrase\u00f1a para proteger el acceso al contenido y al extracto.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "El ID del superior del objeto.",
                        "type": "integer"
                    },
                    "title": {
                        "required": false,
                        "description": "El t\u00edtulo para el objeto.",
                        "type": "object"
                    },
                    "content": {
                        "required": false,
                        "description": "El contenido para el objeto.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "El ID del autor del objeto.",
                        "type": "integer"
                    },
                    "excerpt": {
                        "required": false,
                        "description": "El extracto del objeto.",
                        "type": "object"
                    },
                    "featured_media": {
                        "required": false,
                        "description": "El ID de la imagen destacada para el objeto.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Si los comentarios est\u00e1n abiertos en el objeto o no.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Se puede o no hacer ping al objeto.",
                        "type": "string"
                    },
                    "menu_order": {
                        "required": false,
                        "description": "El orden del objeto en relaci\u00f3n con otro objeto de su tipo.",
                        "type": "integer"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    },
                    "template": {
                        "required": false,
                        "enum": ["page-template-blank.php", ""],
                        "description": "El fichero del tema a usar para mostrar el objeto.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Si evitar la papelera y forzar la eliminaci\u00f3n.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/pages\/(?P<parent>[\\d]+)\/revisions": {
            "namespace": "wp\/v2",
            "methods": ["GET", "GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "El ID del superior del objeto.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["GET"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "El ID del superior del objeto.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wp\/v2\/pages\/(?P<parent>[\\d]+)\/revisions\/(?P<id>[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "DELETE", "GET", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "El ID del superior del objeto.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "El ID del superior del objeto.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Se requiere que sea true, ya que las revisiones no son compatibles con el env\u00edo a la papelera.",
                        "type": "boolean"
                    }
                }
            }, {
                "methods": ["GET"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "El ID del superior del objeto.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "El ID del superior del objeto.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Se requiere que sea true, ya que las revisiones no son compatibles con el env\u00edo a la papelera.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/media": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "P\u00e1gina actual de la colecci\u00f3n.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "N\u00famero m\u00e1ximo de elementos que se devolver\u00e1n en el conjunto de resultados.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limitar resultados a aquellos que coinciden con una cadena.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limita la respuesta a entradas publicadas despu\u00e9s de una fecha dada compatible con ISO9601.",
                        "type": "string"
                    },
                    "author": {
                        "required": false,
                        "default": [],
                        "description": "Limitar el conjunto de resultados a las publicaciones asignadas a autores espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "author_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Aseg\u00fara que el conjunto de resultados excluye las publicaciones asignadas a autores espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "before": {
                        "required": false,
                        "description": "Limita la respuesta a entradas publicadas antes de  una fecha dada compatible con ISO9601.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Asegurarse de que el conjunto de resultados excluye IDs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limitar el conjunto de resultados a IDs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Desplazar el conjunto de resultados un n\u00famero espec\u00edfico de elementos.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Orden de clasificaci\u00f3n de atributos ascendente o descendente.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["author", "date", "id", "include", "modified", "parent", "relevance", "slug", "title"],
                        "description": "Ordenar la colecci\u00f3n por atributo de objeto.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "default": [],
                        "description": "Limitar los resultados a los que tengan IDs superiores concretos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "parent_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Limitar los resultados a todos los elementos excepto aquellos con un identificador padre espec\u00edfico.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "slug": {
                        "required": false,
                        "description": "Limitar el conjunto de resultados a las entradas con uno o m\u00e1s slugs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "status": {
                        "required": false,
                        "default": "inherit",
                        "description": "Limitar el conjunto de resultados a las entradas asignadas a uno o m\u00e1s estados.",
                        "type": "array",
                        "items": {
                            "enum": ["inherit", "private", "trash"],
                            "type": "string"
                        }
                    },
                    "media_type": {
                        "required": false,
                        "enum": ["image", "video", "text", "application", "audio"],
                        "description": "Limitar el conjunto de resultados a adjuntos de un tipo de medio en particular.",
                        "type": "string"
                    },
                    "mime_type": {
                        "required": false,
                        "description": "Limitar el conjunto de resultados a adjuntos de un tipo MIME en particular.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "date": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, en el huso horario del sitio.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, como GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico para el objeto \u00fanico para su tipo.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private"],
                        "description": "Un nombre de estado para el objeto.",
                        "type": "string"
                    },
                    "title": {
                        "required": false,
                        "description": "El t\u00edtulo para el objeto.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "El ID del autor del objeto.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Si los comentarios est\u00e1n abiertos en el objeto o no.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Se puede o no hacer ping al objeto.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    },
                    "template": {
                        "required": false,
                        "enum": [""],
                        "description": "El fichero del tema a usar para mostrar el objeto.",
                        "type": "string"
                    },
                    "alt_text": {
                        "required": false,
                        "description": "Texto alternativo a mostrar cuando no se muestra el adjunto.",
                        "type": "string"
                    },
                    "caption": {
                        "required": false,
                        "description": "Leyenda del adjunto.",
                        "type": "object"
                    },
                    "description": {
                        "required": false,
                        "description": "Descripci\u00f3n del adjunto",
                        "type": "object"
                    },
                    "post": {
                        "required": false,
                        "description": "El ID de las entradas a las que est\u00e1 asociado el adjunto.",
                        "type": "integer"
                    }
                }
            }, {
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "P\u00e1gina actual de la colecci\u00f3n.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "N\u00famero m\u00e1ximo de elementos que se devolver\u00e1n en el conjunto de resultados.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limitar resultados a aquellos que coinciden con una cadena.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limita la respuesta a entradas publicadas despu\u00e9s de una fecha dada compatible con ISO9601.",
                        "type": "string"
                    },
                    "author": {
                        "required": false,
                        "default": [],
                        "description": "Limitar el conjunto de resultados a las publicaciones asignadas a autores espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "author_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Aseg\u00fara que el conjunto de resultados excluye las publicaciones asignadas a autores espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "before": {
                        "required": false,
                        "description": "Limita la respuesta a entradas publicadas antes de  una fecha dada compatible con ISO9601.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Asegurarse de que el conjunto de resultados excluye IDs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limitar el conjunto de resultados a IDs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Desplazar el conjunto de resultados un n\u00famero espec\u00edfico de elementos.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Orden de clasificaci\u00f3n de atributos ascendente o descendente.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["author", "date", "id", "include", "modified", "parent", "relevance", "slug", "title"],
                        "description": "Ordenar la colecci\u00f3n por atributo de objeto.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "default": [],
                        "description": "Limitar los resultados a los que tengan IDs superiores concretos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "parent_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Limitar los resultados a todos los elementos excepto aquellos con un identificador padre espec\u00edfico.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "slug": {
                        "required": false,
                        "description": "Limitar el conjunto de resultados a las entradas con uno o m\u00e1s slugs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "status": {
                        "required": false,
                        "default": "inherit",
                        "description": "Limitar el conjunto de resultados a las entradas asignadas a uno o m\u00e1s estados.",
                        "type": "array",
                        "items": {
                            "enum": ["inherit", "private", "trash"],
                            "type": "string"
                        }
                    },
                    "media_type": {
                        "required": false,
                        "enum": ["image", "video", "text", "application", "audio"],
                        "description": "Limitar el conjunto de resultados a adjuntos de un tipo de medio en particular.",
                        "type": "string"
                    },
                    "mime_type": {
                        "required": false,
                        "description": "Limitar el conjunto de resultados a adjuntos de un tipo MIME en particular.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "date": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, en el huso horario del sitio.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, como GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico para el objeto \u00fanico para su tipo.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private"],
                        "description": "Un nombre de estado para el objeto.",
                        "type": "string"
                    },
                    "title": {
                        "required": false,
                        "description": "El t\u00edtulo para el objeto.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "El ID del autor del objeto.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Si los comentarios est\u00e1n abiertos en el objeto o no.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Se puede o no hacer ping al objeto.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    },
                    "template": {
                        "required": false,
                        "enum": [""],
                        "description": "El fichero del tema a usar para mostrar el objeto.",
                        "type": "string"
                    },
                    "alt_text": {
                        "required": false,
                        "description": "Texto alternativo a mostrar cuando no se muestra el adjunto.",
                        "type": "string"
                    },
                    "caption": {
                        "required": false,
                        "description": "Leyenda del adjunto.",
                        "type": "object"
                    },
                    "description": {
                        "required": false,
                        "description": "Descripci\u00f3n del adjunto",
                        "type": "object"
                    },
                    "post": {
                        "required": false,
                        "description": "El ID de las entradas a las que est\u00e1 asociado el adjunto.",
                        "type": "integer"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/convergenciacnoa.org\/wp-json\/wp\/v2\/media"
            }
        },
        "\/wp\/v2\/media\/(?P<id>[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "date": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, en el huso horario del sitio.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, como GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico para el objeto \u00fanico para su tipo.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private"],
                        "description": "Un nombre de estado para el objeto.",
                        "type": "string"
                    },
                    "title": {
                        "required": false,
                        "description": "El t\u00edtulo para el objeto.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "El ID del autor del objeto.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Si los comentarios est\u00e1n abiertos en el objeto o no.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Se puede o no hacer ping al objeto.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    },
                    "template": {
                        "required": false,
                        "enum": [""],
                        "description": "El fichero del tema a usar para mostrar el objeto.",
                        "type": "string"
                    },
                    "alt_text": {
                        "required": false,
                        "description": "Texto alternativo a mostrar cuando no se muestra el adjunto.",
                        "type": "string"
                    },
                    "caption": {
                        "required": false,
                        "description": "Leyenda del adjunto.",
                        "type": "object"
                    },
                    "description": {
                        "required": false,
                        "description": "Descripci\u00f3n del adjunto",
                        "type": "object"
                    },
                    "post": {
                        "required": false,
                        "description": "El ID de las entradas a las que est\u00e1 asociado el adjunto.",
                        "type": "integer"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Si evitar la papelera y forzar la eliminaci\u00f3n.",
                        "type": "boolean"
                    }
                }
            }, {
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "date": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, en el huso horario del sitio.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, como GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico para el objeto \u00fanico para su tipo.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private"],
                        "description": "Un nombre de estado para el objeto.",
                        "type": "string"
                    },
                    "title": {
                        "required": false,
                        "description": "El t\u00edtulo para el objeto.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "El ID del autor del objeto.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Si los comentarios est\u00e1n abiertos en el objeto o no.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Se puede o no hacer ping al objeto.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    },
                    "template": {
                        "required": false,
                        "enum": [""],
                        "description": "El fichero del tema a usar para mostrar el objeto.",
                        "type": "string"
                    },
                    "alt_text": {
                        "required": false,
                        "description": "Texto alternativo a mostrar cuando no se muestra el adjunto.",
                        "type": "string"
                    },
                    "caption": {
                        "required": false,
                        "description": "Leyenda del adjunto.",
                        "type": "object"
                    },
                    "description": {
                        "required": false,
                        "description": "Descripci\u00f3n del adjunto",
                        "type": "object"
                    },
                    "post": {
                        "required": false,
                        "description": "El ID de las entradas a las que est\u00e1 asociado el adjunto.",
                        "type": "integer"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Si evitar la papelera y forzar la eliminaci\u00f3n.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/types": {
            "namespace": "wp\/v2",
            "methods": ["GET", "GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/convergenciacnoa.org\/wp-json\/wp\/v2\/types"
            }
        },
        "\/wp\/v2\/types\/(?P<type>[\\w-]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "type": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico del tipo de contenido.",
                        "type": "string"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["GET"],
                "args": {
                    "type": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico del tipo de contenido.",
                        "type": "string"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wp\/v2\/statuses": {
            "namespace": "wp\/v2",
            "methods": ["GET", "GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/convergenciacnoa.org\/wp-json\/wp\/v2\/statuses"
            }
        },
        "\/wp\/v2\/statuses\/(?P<status>[\\w-]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "status": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico del estado.",
                        "type": "string"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["GET"],
                "args": {
                    "status": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico del estado.",
                        "type": "string"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wp\/v2\/taxonomies": {
            "namespace": "wp\/v2",
            "methods": ["GET", "GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    },
                    "type": {
                        "required": false,
                        "description": "Limita los resultados a taxonom\u00edas asociadas con un tipo de contenido espec\u00edfico.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    },
                    "type": {
                        "required": false,
                        "description": "Limita los resultados a taxonom\u00edas asociadas con un tipo de contenido espec\u00edfico.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/convergenciacnoa.org\/wp-json\/wp\/v2\/taxonomies"
            }
        },
        "\/wp\/v2\/taxonomies\/(?P<taxonomy>[\\w-]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "taxonomy": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico de la taxonom\u00eda.",
                        "type": "string"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["GET"],
                "args": {
                    "taxonomy": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico de la taxonom\u00eda.",
                        "type": "string"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wp\/v2\/categories": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "P\u00e1gina actual de la colecci\u00f3n.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "N\u00famero m\u00e1ximo de elementos que se devolver\u00e1n en el conjunto de resultados.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limitar resultados a aquellos que coinciden con una cadena.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Asegurarse de que el conjunto de resultados excluye IDs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limitar el conjunto de resultados a IDs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "order": {
                        "required": false,
                        "default": "asc",
                        "enum": ["asc", "desc"],
                        "description": "Orden de clasificaci\u00f3n de atributos ascendente o descendente.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "name",
                        "enum": ["id", "include", "name", "slug", "term_group", "description", "count"],
                        "description": "Ordenar la colecci\u00f3n por atributo de t\u00e9rmino.",
                        "type": "string"
                    },
                    "hide_empty": {
                        "required": false,
                        "default": false,
                        "description": "Si se ocultar\u00e1n o no los t\u00e9rminos asignados a cualquier entrada.",
                        "type": "boolean"
                    },
                    "parent": {
                        "required": false,
                        "description": "Limita el resultado a t\u00e9rminos asignados a un superior espec\u00edfico.",
                        "type": "integer"
                    },
                    "post": {
                        "required": false,
                        "description": "Limita el resultado a t\u00e9rminos asignados a una entrada espec\u00edfica.",
                        "type": "integer"
                    },
                    "slug": {
                        "required": false,
                        "description": "Limitar el resultado a t\u00e9rminos con uno o m\u00e1s slugs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "description": {
                        "required": false,
                        "description": "Descripci\u00f3n HTML del t\u00e9rmino.",
                        "type": "string"
                    },
                    "name": {
                        "required": true,
                        "description": "T\u00edtulo HTML del t\u00e9rmino.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico del t\u00e9rmino \u00fanico de este tipo.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "Identificador del t\u00e9rmino superior.",
                        "type": "integer"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "P\u00e1gina actual de la colecci\u00f3n.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "N\u00famero m\u00e1ximo de elementos que se devolver\u00e1n en el conjunto de resultados.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limitar resultados a aquellos que coinciden con una cadena.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Asegurarse de que el conjunto de resultados excluye IDs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limitar el conjunto de resultados a IDs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "order": {
                        "required": false,
                        "default": "asc",
                        "enum": ["asc", "desc"],
                        "description": "Orden de clasificaci\u00f3n de atributos ascendente o descendente.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "name",
                        "enum": ["id", "include", "name", "slug", "term_group", "description", "count"],
                        "description": "Ordenar la colecci\u00f3n por atributo de t\u00e9rmino.",
                        "type": "string"
                    },
                    "hide_empty": {
                        "required": false,
                        "default": false,
                        "description": "Si se ocultar\u00e1n o no los t\u00e9rminos asignados a cualquier entrada.",
                        "type": "boolean"
                    },
                    "parent": {
                        "required": false,
                        "description": "Limita el resultado a t\u00e9rminos asignados a un superior espec\u00edfico.",
                        "type": "integer"
                    },
                    "post": {
                        "required": false,
                        "description": "Limita el resultado a t\u00e9rminos asignados a una entrada espec\u00edfica.",
                        "type": "integer"
                    },
                    "slug": {
                        "required": false,
                        "description": "Limitar el resultado a t\u00e9rminos con uno o m\u00e1s slugs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "description": {
                        "required": false,
                        "description": "Descripci\u00f3n HTML del t\u00e9rmino.",
                        "type": "string"
                    },
                    "name": {
                        "required": true,
                        "description": "T\u00edtulo HTML del t\u00e9rmino.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico del t\u00e9rmino \u00fanico de este tipo.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "Identificador del t\u00e9rmino superior.",
                        "type": "integer"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/convergenciacnoa.org\/wp-json\/wp\/v2\/categories"
            }
        },
        "\/wp\/v2\/categories\/(?P<id>[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico del t\u00e9rmino.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico del t\u00e9rmino.",
                        "type": "integer"
                    },
                    "description": {
                        "required": false,
                        "description": "Descripci\u00f3n HTML del t\u00e9rmino.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "T\u00edtulo HTML del t\u00e9rmino.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico del t\u00e9rmino \u00fanico de este tipo.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "Identificador del t\u00e9rmino superior.",
                        "type": "integer"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico del t\u00e9rmino.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Se requiere que sea true, ya que los t\u00e9rminos no son compatibles con el env\u00edo a la papelera.",
                        "type": "boolean"
                    }
                }
            }, {
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico del t\u00e9rmino.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico del t\u00e9rmino.",
                        "type": "integer"
                    },
                    "description": {
                        "required": false,
                        "description": "Descripci\u00f3n HTML del t\u00e9rmino.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "T\u00edtulo HTML del t\u00e9rmino.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico del t\u00e9rmino \u00fanico de este tipo.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "Identificador del t\u00e9rmino superior.",
                        "type": "integer"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico del t\u00e9rmino.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Se requiere que sea true, ya que los t\u00e9rminos no son compatibles con el env\u00edo a la papelera.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/tags": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "P\u00e1gina actual de la colecci\u00f3n.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "N\u00famero m\u00e1ximo de elementos que se devolver\u00e1n en el conjunto de resultados.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limitar resultados a aquellos que coinciden con una cadena.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Asegurarse de que el conjunto de resultados excluye IDs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limitar el conjunto de resultados a IDs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Desplazar el conjunto de resultados un n\u00famero espec\u00edfico de elementos.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "asc",
                        "enum": ["asc", "desc"],
                        "description": "Orden de clasificaci\u00f3n de atributos ascendente o descendente.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "name",
                        "enum": ["id", "include", "name", "slug", "term_group", "description", "count"],
                        "description": "Ordenar la colecci\u00f3n por atributo de t\u00e9rmino.",
                        "type": "string"
                    },
                    "hide_empty": {
                        "required": false,
                        "default": false,
                        "description": "Si se ocultar\u00e1n o no los t\u00e9rminos asignados a cualquier entrada.",
                        "type": "boolean"
                    },
                    "post": {
                        "required": false,
                        "description": "Limita el resultado a t\u00e9rminos asignados a una entrada espec\u00edfica.",
                        "type": "integer"
                    },
                    "slug": {
                        "required": false,
                        "description": "Limitar el resultado a t\u00e9rminos con uno o m\u00e1s slugs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "description": {
                        "required": false,
                        "description": "Descripci\u00f3n HTML del t\u00e9rmino.",
                        "type": "string"
                    },
                    "name": {
                        "required": true,
                        "description": "T\u00edtulo HTML del t\u00e9rmino.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico del t\u00e9rmino \u00fanico de este tipo.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "P\u00e1gina actual de la colecci\u00f3n.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "N\u00famero m\u00e1ximo de elementos que se devolver\u00e1n en el conjunto de resultados.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limitar resultados a aquellos que coinciden con una cadena.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Asegurarse de que el conjunto de resultados excluye IDs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limitar el conjunto de resultados a IDs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Desplazar el conjunto de resultados un n\u00famero espec\u00edfico de elementos.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "asc",
                        "enum": ["asc", "desc"],
                        "description": "Orden de clasificaci\u00f3n de atributos ascendente o descendente.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "name",
                        "enum": ["id", "include", "name", "slug", "term_group", "description", "count"],
                        "description": "Ordenar la colecci\u00f3n por atributo de t\u00e9rmino.",
                        "type": "string"
                    },
                    "hide_empty": {
                        "required": false,
                        "default": false,
                        "description": "Si se ocultar\u00e1n o no los t\u00e9rminos asignados a cualquier entrada.",
                        "type": "boolean"
                    },
                    "post": {
                        "required": false,
                        "description": "Limita el resultado a t\u00e9rminos asignados a una entrada espec\u00edfica.",
                        "type": "integer"
                    },
                    "slug": {
                        "required": false,
                        "description": "Limitar el resultado a t\u00e9rminos con uno o m\u00e1s slugs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "description": {
                        "required": false,
                        "description": "Descripci\u00f3n HTML del t\u00e9rmino.",
                        "type": "string"
                    },
                    "name": {
                        "required": true,
                        "description": "T\u00edtulo HTML del t\u00e9rmino.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico del t\u00e9rmino \u00fanico de este tipo.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/convergenciacnoa.org\/wp-json\/wp\/v2\/tags"
            }
        },
        "\/wp\/v2\/tags\/(?P<id>[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico del t\u00e9rmino.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico del t\u00e9rmino.",
                        "type": "integer"
                    },
                    "description": {
                        "required": false,
                        "description": "Descripci\u00f3n HTML del t\u00e9rmino.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "T\u00edtulo HTML del t\u00e9rmino.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico del t\u00e9rmino \u00fanico de este tipo.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico del t\u00e9rmino.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Se requiere que sea true, ya que los t\u00e9rminos no son compatibles con el env\u00edo a la papelera.",
                        "type": "boolean"
                    }
                }
            }, {
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico del t\u00e9rmino.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico del t\u00e9rmino.",
                        "type": "integer"
                    },
                    "description": {
                        "required": false,
                        "description": "Descripci\u00f3n HTML del t\u00e9rmino.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "T\u00edtulo HTML del t\u00e9rmino.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico del t\u00e9rmino \u00fanico de este tipo.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico del t\u00e9rmino.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Se requiere que sea true, ya que los t\u00e9rminos no son compatibles con el env\u00edo a la papelera.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/users": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "P\u00e1gina actual de la colecci\u00f3n.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "N\u00famero m\u00e1ximo de elementos que se devolver\u00e1n en el conjunto de resultados.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limitar resultados a aquellos que coinciden con una cadena.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Asegurarse de que el conjunto de resultados excluye IDs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limitar el conjunto de resultados a IDs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Desplazar el conjunto de resultados un n\u00famero espec\u00edfico de elementos.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "asc",
                        "enum": ["asc", "desc"],
                        "description": "Orden de clasificaci\u00f3n de atributos ascendente o descendente.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "name",
                        "enum": ["id", "include", "name", "registered_date", "slug", "email", "url"],
                        "description": "Ordenar la colecci\u00f3n por atributo de objeto.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Limitar el resultado a usuarios con uno o m\u00e1s slugs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "roles": {
                        "required": false,
                        "description": "Limita el resultado a usuarios que se ajusten al menos a un perfil espec\u00edfico facilitado. Acepta listas en csv o un solo perfil.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "username": {
                        "required": true,
                        "description": "Nombre de inicio de sesi\u00f3n del usuario.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "Muestra el nombre del usuario.",
                        "type": "string"
                    },
                    "first_name": {
                        "required": false,
                        "description": "Nombre del usuario.",
                        "type": "string"
                    },
                    "last_name": {
                        "required": false,
                        "description": "Apellidos del usuario.",
                        "type": "string"
                    },
                    "email": {
                        "required": true,
                        "description": "La direcci\u00f3n de correo electr\u00f3nico del usuario.",
                        "type": "string"
                    },
                    "url": {
                        "required": false,
                        "description": "Enlace del usuario.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Descripci\u00f3n del usuario.",
                        "type": "string"
                    },
                    "locale": {
                        "required": false,
                        "enum": ["", "en_US", "es_ES"],
                        "description": "Configuraci\u00f3n local del usuario.",
                        "type": "string"
                    },
                    "nickname": {
                        "required": false,
                        "description": "Alias del usuario.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico del usuario.",
                        "type": "string"
                    },
                    "roles": {
                        "required": false,
                        "description": "Perfiles asignados al usuario.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "password": {
                        "required": true,
                        "description": "Contrase\u00f1a del usuario (no incluida).",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "P\u00e1gina actual de la colecci\u00f3n.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "N\u00famero m\u00e1ximo de elementos que se devolver\u00e1n en el conjunto de resultados.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limitar resultados a aquellos que coinciden con una cadena.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Asegurarse de que el conjunto de resultados excluye IDs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limitar el conjunto de resultados a IDs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Desplazar el conjunto de resultados un n\u00famero espec\u00edfico de elementos.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "asc",
                        "enum": ["asc", "desc"],
                        "description": "Orden de clasificaci\u00f3n de atributos ascendente o descendente.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "name",
                        "enum": ["id", "include", "name", "registered_date", "slug", "email", "url"],
                        "description": "Ordenar la colecci\u00f3n por atributo de objeto.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Limitar el resultado a usuarios con uno o m\u00e1s slugs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "roles": {
                        "required": false,
                        "description": "Limita el resultado a usuarios que se ajusten al menos a un perfil espec\u00edfico facilitado. Acepta listas en csv o un solo perfil.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "username": {
                        "required": true,
                        "description": "Nombre de inicio de sesi\u00f3n del usuario.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "Muestra el nombre del usuario.",
                        "type": "string"
                    },
                    "first_name": {
                        "required": false,
                        "description": "Nombre del usuario.",
                        "type": "string"
                    },
                    "last_name": {
                        "required": false,
                        "description": "Apellidos del usuario.",
                        "type": "string"
                    },
                    "email": {
                        "required": true,
                        "description": "La direcci\u00f3n de correo electr\u00f3nico del usuario.",
                        "type": "string"
                    },
                    "url": {
                        "required": false,
                        "description": "Enlace del usuario.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Descripci\u00f3n del usuario.",
                        "type": "string"
                    },
                    "locale": {
                        "required": false,
                        "enum": ["", "en_US", "es_ES"],
                        "description": "Configuraci\u00f3n local del usuario.",
                        "type": "string"
                    },
                    "nickname": {
                        "required": false,
                        "description": "Alias del usuario.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico del usuario.",
                        "type": "string"
                    },
                    "roles": {
                        "required": false,
                        "description": "Perfiles asignados al usuario.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "password": {
                        "required": true,
                        "description": "Contrase\u00f1a del usuario (no incluida).",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/convergenciacnoa.org\/wp-json\/wp\/v2\/users"
            }
        },
        "\/wp\/v2\/users\/(?P<id>[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico del usuario.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico del usuario.",
                        "type": "integer"
                    },
                    "username": {
                        "required": false,
                        "description": "Nombre de inicio de sesi\u00f3n del usuario.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "Muestra el nombre del usuario.",
                        "type": "string"
                    },
                    "first_name": {
                        "required": false,
                        "description": "Nombre del usuario.",
                        "type": "string"
                    },
                    "last_name": {
                        "required": false,
                        "description": "Apellidos del usuario.",
                        "type": "string"
                    },
                    "email": {
                        "required": false,
                        "description": "La direcci\u00f3n de correo electr\u00f3nico del usuario.",
                        "type": "string"
                    },
                    "url": {
                        "required": false,
                        "description": "Enlace del usuario.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Descripci\u00f3n del usuario.",
                        "type": "string"
                    },
                    "locale": {
                        "required": false,
                        "enum": ["", "en_US", "es_ES"],
                        "description": "Configuraci\u00f3n local del usuario.",
                        "type": "string"
                    },
                    "nickname": {
                        "required": false,
                        "description": "Alias del usuario.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico del usuario.",
                        "type": "string"
                    },
                    "roles": {
                        "required": false,
                        "description": "Perfiles asignados al usuario.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "password": {
                        "required": false,
                        "description": "Contrase\u00f1a del usuario (no incluida).",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico del usuario.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Se requiere que sea true, ya que los usuarios no son compatibles con el env\u00edo a la papelera.",
                        "type": "boolean"
                    },
                    "reassign": {
                        "required": true,
                        "description": "Reasignando las entradas y los enlaces del usuario borrado a la ID de ese usuario.",
                        "type": "integer"
                    }
                }
            }, {
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico del usuario.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico del usuario.",
                        "type": "integer"
                    },
                    "username": {
                        "required": false,
                        "description": "Nombre de inicio de sesi\u00f3n del usuario.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "Muestra el nombre del usuario.",
                        "type": "string"
                    },
                    "first_name": {
                        "required": false,
                        "description": "Nombre del usuario.",
                        "type": "string"
                    },
                    "last_name": {
                        "required": false,
                        "description": "Apellidos del usuario.",
                        "type": "string"
                    },
                    "email": {
                        "required": false,
                        "description": "La direcci\u00f3n de correo electr\u00f3nico del usuario.",
                        "type": "string"
                    },
                    "url": {
                        "required": false,
                        "description": "Enlace del usuario.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Descripci\u00f3n del usuario.",
                        "type": "string"
                    },
                    "locale": {
                        "required": false,
                        "enum": ["", "en_US", "es_ES"],
                        "description": "Configuraci\u00f3n local del usuario.",
                        "type": "string"
                    },
                    "nickname": {
                        "required": false,
                        "description": "Alias del usuario.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico del usuario.",
                        "type": "string"
                    },
                    "roles": {
                        "required": false,
                        "description": "Perfiles asignados al usuario.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "password": {
                        "required": false,
                        "description": "Contrase\u00f1a del usuario (no incluida).",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico del usuario.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Se requiere que sea true, ya que los usuarios no son compatibles con el env\u00edo a la papelera.",
                        "type": "boolean"
                    },
                    "reassign": {
                        "required": true,
                        "description": "Reasignando las entradas y los enlaces del usuario borrado a la ID de ese usuario.",
                        "type": "integer"
                    }
                }
            }]
        },
        "\/wp\/v2\/users\/me": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "username": {
                        "required": false,
                        "description": "Nombre de inicio de sesi\u00f3n del usuario.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "Muestra el nombre del usuario.",
                        "type": "string"
                    },
                    "first_name": {
                        "required": false,
                        "description": "Nombre del usuario.",
                        "type": "string"
                    },
                    "last_name": {
                        "required": false,
                        "description": "Apellidos del usuario.",
                        "type": "string"
                    },
                    "email": {
                        "required": false,
                        "description": "La direcci\u00f3n de correo electr\u00f3nico del usuario.",
                        "type": "string"
                    },
                    "url": {
                        "required": false,
                        "description": "Enlace del usuario.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Descripci\u00f3n del usuario.",
                        "type": "string"
                    },
                    "locale": {
                        "required": false,
                        "enum": ["", "en_US", "es_ES"],
                        "description": "Configuraci\u00f3n local del usuario.",
                        "type": "string"
                    },
                    "nickname": {
                        "required": false,
                        "description": "Alias del usuario.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico del usuario.",
                        "type": "string"
                    },
                    "roles": {
                        "required": false,
                        "description": "Perfiles asignados al usuario.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "password": {
                        "required": false,
                        "description": "Contrase\u00f1a del usuario (no incluida).",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Se requiere que sea true, ya que los usuarios no son compatibles con el env\u00edo a la papelera.",
                        "type": "boolean"
                    },
                    "reassign": {
                        "required": true,
                        "description": "Reasignando las entradas y los enlaces del usuario borrado a la ID de ese usuario.",
                        "type": "integer"
                    }
                }
            }, {
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "username": {
                        "required": false,
                        "description": "Nombre de inicio de sesi\u00f3n del usuario.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "Muestra el nombre del usuario.",
                        "type": "string"
                    },
                    "first_name": {
                        "required": false,
                        "description": "Nombre del usuario.",
                        "type": "string"
                    },
                    "last_name": {
                        "required": false,
                        "description": "Apellidos del usuario.",
                        "type": "string"
                    },
                    "email": {
                        "required": false,
                        "description": "La direcci\u00f3n de correo electr\u00f3nico del usuario.",
                        "type": "string"
                    },
                    "url": {
                        "required": false,
                        "description": "Enlace del usuario.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Descripci\u00f3n del usuario.",
                        "type": "string"
                    },
                    "locale": {
                        "required": false,
                        "enum": ["", "en_US", "es_ES"],
                        "description": "Configuraci\u00f3n local del usuario.",
                        "type": "string"
                    },
                    "nickname": {
                        "required": false,
                        "description": "Alias del usuario.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Un identificador alfanum\u00e9rico del usuario.",
                        "type": "string"
                    },
                    "roles": {
                        "required": false,
                        "description": "Perfiles asignados al usuario.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "password": {
                        "required": false,
                        "description": "Contrase\u00f1a del usuario (no incluida).",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Se requiere que sea true, ya que los usuarios no son compatibles con el env\u00edo a la papelera.",
                        "type": "boolean"
                    },
                    "reassign": {
                        "required": true,
                        "description": "Reasignando las entradas y los enlaces del usuario borrado a la ID de ese usuario.",
                        "type": "integer"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/convergenciacnoa.org\/wp-json\/wp\/v2\/users\/me"
            }
        },
        "\/wp\/v2\/comments": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "P\u00e1gina actual de la colecci\u00f3n.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "N\u00famero m\u00e1ximo de elementos que se devolver\u00e1n en el conjunto de resultados.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limitar resultados a aquellos que coinciden con una cadena.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limita la respuesta a comentarios publicados despu\u00e9s de una fecha dada compatible con ISO8601.",
                        "type": "string"
                    },
                    "author": {
                        "required": false,
                        "description": "Limitar el conjunto de resultados a comentarios asignados a identificadores de usuario espec\u00edficos. Requier autorizaci\u00f3n.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "author_exclude": {
                        "required": false,
                        "description": "Asegurarse de que el conjunto de resultados excluye los comentarios asignados a IDs de usuario espec\u00edficos. Requiere autorizaci\u00f3n.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "author_email": {
                        "required": false,
                        "description": "Limitar el conjunto de resultados a aquellos con un correo electr\u00f3nico de autor espec\u00edfico. Requiere autorizaci\u00f3n.",
                        "type": "string"
                    },
                    "before": {
                        "required": false,
                        "description": "Limita la respuesta a comentarios publicados antes de una fecha dada compatible con ISO8601.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Asegurarse de que el conjunto de resultados excluye IDs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limitar el conjunto de resultados a IDs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Desplazar el conjunto de resultados un n\u00famero espec\u00edfico de elementos.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Orden de clasificaci\u00f3n de atributos ascendente o descendente.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date_gmt",
                        "enum": ["date", "date_gmt", "id", "include", "post", "parent", "type"],
                        "description": "Ordenar la colecci\u00f3n por atributo de objeto.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "default": [],
                        "description": "Limita el resultado a comentarios con ID superiores espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "parent_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Aseg\u00farate de que el conjunto de resultados excluya los IDs superiores espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "post": {
                        "required": false,
                        "default": [],
                        "description": "Limita el resultado a comentarios asignados a ID de entrada espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "status": {
                        "required": false,
                        "default": "approve",
                        "description": "Limitar el conjunto de resultados a los comentarios asignados a un estado espec\u00edfico. Requiere autorizaci\u00f3n.",
                        "type": "string"
                    },
                    "type": {
                        "required": false,
                        "default": "comment",
                        "description": "Limitar el conjunto de resultados a los comentarios asignados a un tipo espec\u00edfico. Requiere autorizaci\u00f3n.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "La contrase\u00f1a para la entrada si est\u00e1 protegida por contrase\u00f1a.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "author": {
                        "required": false,
                        "description": "El ID del objeto del usuario, si el autor era un usuario.",
                        "type": "integer"
                    },
                    "author_email": {
                        "required": false,
                        "description": "Direcci\u00f3n de correo electr\u00f3nico del autor del objeto.",
                        "type": "string"
                    },
                    "author_ip": {
                        "required": false,
                        "description": "Direcci\u00f3n IP del autor del objeto.",
                        "type": "string"
                    },
                    "author_name": {
                        "required": false,
                        "description": "Muestra el nombre del autor del objeto.",
                        "type": "string"
                    },
                    "author_url": {
                        "required": false,
                        "description": "URL del autor del objeto.",
                        "type": "string"
                    },
                    "author_user_agent": {
                        "required": false,
                        "description": "User agent para el autor del objeto.",
                        "type": "string"
                    },
                    "content": {
                        "required": false,
                        "description": "El contenido para el objeto.",
                        "type": "object"
                    },
                    "date": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, en el huso horario del sitio.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, como GMT.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "default": 0,
                        "description": "El ID del superior del objeto.",
                        "type": "integer"
                    },
                    "post": {
                        "required": false,
                        "default": 0,
                        "description": "El ID del objeto asociado a la publicaci\u00f3n.",
                        "type": "integer"
                    },
                    "status": {
                        "required": false,
                        "description": "Estado del objeto.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "P\u00e1gina actual de la colecci\u00f3n.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "N\u00famero m\u00e1ximo de elementos que se devolver\u00e1n en el conjunto de resultados.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limitar resultados a aquellos que coinciden con una cadena.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limita la respuesta a comentarios publicados despu\u00e9s de una fecha dada compatible con ISO8601.",
                        "type": "string"
                    },
                    "author": {
                        "required": false,
                        "description": "Limitar el conjunto de resultados a comentarios asignados a identificadores de usuario espec\u00edficos. Requier autorizaci\u00f3n.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "author_exclude": {
                        "required": false,
                        "description": "Asegurarse de que el conjunto de resultados excluye los comentarios asignados a IDs de usuario espec\u00edficos. Requiere autorizaci\u00f3n.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "author_email": {
                        "required": false,
                        "description": "Limitar el conjunto de resultados a aquellos con un correo electr\u00f3nico de autor espec\u00edfico. Requiere autorizaci\u00f3n.",
                        "type": "string"
                    },
                    "before": {
                        "required": false,
                        "description": "Limita la respuesta a comentarios publicados antes de una fecha dada compatible con ISO8601.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Asegurarse de que el conjunto de resultados excluye IDs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limitar el conjunto de resultados a IDs espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Desplazar el conjunto de resultados un n\u00famero espec\u00edfico de elementos.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Orden de clasificaci\u00f3n de atributos ascendente o descendente.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date_gmt",
                        "enum": ["date", "date_gmt", "id", "include", "post", "parent", "type"],
                        "description": "Ordenar la colecci\u00f3n por atributo de objeto.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "default": [],
                        "description": "Limita el resultado a comentarios con ID superiores espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "parent_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Aseg\u00farate de que el conjunto de resultados excluya los IDs superiores espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "post": {
                        "required": false,
                        "default": [],
                        "description": "Limita el resultado a comentarios asignados a ID de entrada espec\u00edficos.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "status": {
                        "required": false,
                        "default": "approve",
                        "description": "Limitar el conjunto de resultados a los comentarios asignados a un estado espec\u00edfico. Requiere autorizaci\u00f3n.",
                        "type": "string"
                    },
                    "type": {
                        "required": false,
                        "default": "comment",
                        "description": "Limitar el conjunto de resultados a los comentarios asignados a un tipo espec\u00edfico. Requiere autorizaci\u00f3n.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "La contrase\u00f1a para la entrada si est\u00e1 protegida por contrase\u00f1a.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "author": {
                        "required": false,
                        "description": "El ID del objeto del usuario, si el autor era un usuario.",
                        "type": "integer"
                    },
                    "author_email": {
                        "required": false,
                        "description": "Direcci\u00f3n de correo electr\u00f3nico del autor del objeto.",
                        "type": "string"
                    },
                    "author_ip": {
                        "required": false,
                        "description": "Direcci\u00f3n IP del autor del objeto.",
                        "type": "string"
                    },
                    "author_name": {
                        "required": false,
                        "description": "Muestra el nombre del autor del objeto.",
                        "type": "string"
                    },
                    "author_url": {
                        "required": false,
                        "description": "URL del autor del objeto.",
                        "type": "string"
                    },
                    "author_user_agent": {
                        "required": false,
                        "description": "User agent para el autor del objeto.",
                        "type": "string"
                    },
                    "content": {
                        "required": false,
                        "description": "El contenido para el objeto.",
                        "type": "object"
                    },
                    "date": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, en el huso horario del sitio.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, como GMT.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "default": 0,
                        "description": "El ID del superior del objeto.",
                        "type": "integer"
                    },
                    "post": {
                        "required": false,
                        "default": 0,
                        "description": "El ID del objeto asociado a la publicaci\u00f3n.",
                        "type": "integer"
                    },
                    "status": {
                        "required": false,
                        "description": "Estado del objeto.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/convergenciacnoa.org\/wp-json\/wp\/v2\/comments"
            }
        },
        "\/wp\/v2\/comments\/(?P<id>[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "La contrase\u00f1a de la entrada superior del comentario (si la entrada est\u00e1 protegida por contrase\u00f1a).",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "author": {
                        "required": false,
                        "description": "El ID del objeto del usuario, si el autor era un usuario.",
                        "type": "integer"
                    },
                    "author_email": {
                        "required": false,
                        "description": "Direcci\u00f3n de correo electr\u00f3nico del autor del objeto.",
                        "type": "string"
                    },
                    "author_ip": {
                        "required": false,
                        "description": "Direcci\u00f3n IP del autor del objeto.",
                        "type": "string"
                    },
                    "author_name": {
                        "required": false,
                        "description": "Muestra el nombre del autor del objeto.",
                        "type": "string"
                    },
                    "author_url": {
                        "required": false,
                        "description": "URL del autor del objeto.",
                        "type": "string"
                    },
                    "author_user_agent": {
                        "required": false,
                        "description": "User agent para el autor del objeto.",
                        "type": "string"
                    },
                    "content": {
                        "required": false,
                        "description": "El contenido para el objeto.",
                        "type": "object"
                    },
                    "date": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, en el huso horario del sitio.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, como GMT.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "El ID del superior del objeto.",
                        "type": "integer"
                    },
                    "post": {
                        "required": false,
                        "description": "El ID del objeto asociado a la publicaci\u00f3n.",
                        "type": "integer"
                    },
                    "status": {
                        "required": false,
                        "description": "Estado del objeto.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Si evitar la papelera y forzar la eliminaci\u00f3n.",
                        "type": "boolean"
                    },
                    "password": {
                        "required": false,
                        "description": "La contrase\u00f1a de la entrada superior del comentario (si la entrada est\u00e1 protegida por contrase\u00f1a).",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u00c1mbito de aplicaci\u00f3n de la solicitud; determina los campos presentes en la respuesta.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "La contrase\u00f1a de la entrada superior del comentario (si la entrada est\u00e1 protegida por contrase\u00f1a).",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "author": {
                        "required": false,
                        "description": "El ID del objeto del usuario, si el autor era un usuario.",
                        "type": "integer"
                    },
                    "author_email": {
                        "required": false,
                        "description": "Direcci\u00f3n de correo electr\u00f3nico del autor del objeto.",
                        "type": "string"
                    },
                    "author_ip": {
                        "required": false,
                        "description": "Direcci\u00f3n IP del autor del objeto.",
                        "type": "string"
                    },
                    "author_name": {
                        "required": false,
                        "description": "Muestra el nombre del autor del objeto.",
                        "type": "string"
                    },
                    "author_url": {
                        "required": false,
                        "description": "URL del autor del objeto.",
                        "type": "string"
                    },
                    "author_user_agent": {
                        "required": false,
                        "description": "User agent para el autor del objeto.",
                        "type": "string"
                    },
                    "content": {
                        "required": false,
                        "description": "El contenido para el objeto.",
                        "type": "object"
                    },
                    "date": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, en el huso horario del sitio.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "La fecha de publicaci\u00f3n del objeto, como GMT.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "El ID del superior del objeto.",
                        "type": "integer"
                    },
                    "post": {
                        "required": false,
                        "description": "El ID del objeto asociado a la publicaci\u00f3n.",
                        "type": "integer"
                    },
                    "status": {
                        "required": false,
                        "description": "Estado del objeto.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Campos meta.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Identificador \u00fanico para el objeto.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Si evitar la papelera y forzar la eliminaci\u00f3n.",
                        "type": "boolean"
                    },
                    "password": {
                        "required": false,
                        "description": "La contrase\u00f1a de la entrada superior del comentario (si la entrada est\u00e1 protegida por contrase\u00f1a).",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wp\/v2\/settings": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "GET", "POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "title": {
                        "required": false,
                        "description": "T\u00edtulo del sitio.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Site description.",
                        "type": "string"
                    },
                    "url": {
                        "required": false,
                        "description": "Site URL",
                        "type": "string"
                    },
                    "email": {
                        "required": false,
                        "description": "This address is used for admin purposes. If you change this we will send you an email at your new address to confirm it. The new address will not become active until confirmed.",
                        "type": "string"
                    },
                    "timezone": {
                        "required": false,
                        "description": "Una ciudad en la misma zona horaria que t\u00fa.",
                        "type": "string"
                    },
                    "date_format": {
                        "required": false,
                        "description": "Formato fecha para todas las cadenas de fecha.",
                        "type": "string"
                    },
                    "time_format": {
                        "required": false,
                        "description": "Formato de tiempo para todas las cadenas de tiempo.",
                        "type": "string"
                    },
                    "start_of_week": {
                        "required": false,
                        "description": "El n\u00famero de d\u00eda en el que la semana debe comenzar.",
                        "type": "number"
                    },
                    "language": {
                        "required": false,
                        "description": "C\u00f3digo del locale de WordPress.",
                        "type": "string"
                    },
                    "use_smilies": {
                        "required": false,
                        "description": "Convierte emoticonos como :-) y :-P en gr\u00e1ficos en la pantalla.",
                        "type": "boolean"
                    },
                    "default_category": {
                        "required": false,
                        "description": "Default category.",
                        "type": "number"
                    },
                    "default_post_format": {
                        "required": false,
                        "description": "Formato de la entrada por defecto.",
                        "type": "string"
                    },
                    "posts_per_page": {
                        "required": false,
                        "description": "Las p\u00e1ginas de blog muestran como m\u00e1ximo.",
                        "type": "number"
                    }
                }
            }, {
                "methods": ["GET"],
                "args": []
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "title": {
                        "required": false,
                        "description": "T\u00edtulo del sitio.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Descripci\u00f3n corta del sitio.",
                        "type": "string"
                    },
                    "url": {
                        "required": false,
                        "description": "URL del sitio.",
                        "type": "string"
                    },
                    "email": {
                        "required": false,
                        "description": "Esta direcci\u00f3n se utiliza para fines de administraci\u00f3n, por ejemplo avisos de nuevos usuarios.",
                        "type": "string"
                    },
                    "timezone": {
                        "required": false,
                        "description": "Una ciudad en la misma zona horaria que t\u00fa.",
                        "type": "string"
                    },
                    "date_format": {
                        "required": false,
                        "description": "Formato fecha para todas las cadenas de fecha.",
                        "type": "string"
                    },
                    "time_format": {
                        "required": false,
                        "description": "Formato de tiempo para todas las cadenas de tiempo.",
                        "type": "string"
                    },
                    "start_of_week": {
                        "required": false,
                        "description": "El n\u00famero de d\u00eda en el que la semana debe comenzar.",
                        "type": "integer"
                    },
                    "language": {
                        "required": false,
                        "description": "C\u00f3digo del locale de WordPress.",
                        "type": "string"
                    },
                    "use_smilies": {
                        "required": false,
                        "description": "Convierte emoticonos como :-) y :-P en gr\u00e1ficos en la pantalla.",
                        "type": "boolean"
                    },
                    "default_category": {
                        "required": false,
                        "description": "Categoria de entrada por defecto",
                        "type": "integer"
                    },
                    "default_post_format": {
                        "required": false,
                        "description": "Formato de la entrada por defecto.",
                        "type": "string"
                    },
                    "posts_per_page": {
                        "required": false,
                        "description": "Las p\u00e1ginas de blog muestran como m\u00e1ximo.",
                        "type": "integer"
                    },
                    "default_ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Permite notificaciones de enlaces desde otros sitios (pingbacks y trackbacks) en los nuevos art\u00edculos.",
                        "type": "string"
                    },
                    "default_comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Permitir a la gente publicar comentarios en las entradas nuevas.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/convergenciacnoa.org\/wp-json\/wp\/v2\/settings"
            }
        },
        "\/oembed\/1.0": {
            "namespace": "oembed\/1.0",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "namespace": {
                        "required": false,
                        "default": "oembed\/1.0"
                    },
                    "context": {
                        "required": false,
                        "default": "view"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/convergenciacnoa.org\/wp-json\/oembed\/1.0"
            }
        },
        "\/oembed\/1.0\/embed": {
            "namespace": "oembed\/1.0",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "url": {
                        "required": true
                    },
                    "format": {
                        "required": false,
                        "default": "json"
                    },
                    "maxwidth": {
                        "required": false,
                        "default": 600
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/convergenciacnoa.org\/wp-json\/oembed\/1.0\/embed"
            }
        },
        "\/oembed\/1.0\/proxy": {
            "namespace": "oembed\/1.0",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "url": {
                        "required": true,
                        "description": "La URL del recurso del que recuperar los datos oEmbed.",
                        "type": "string"
                    },
                    "format": {
                        "required": false,
                        "default": "json",
                        "enum": ["json", "xml"],
                        "description": "El formato oEmbed a utilizar.",
                        "type": "string"
                    },
                    "maxwidth": {
                        "required": false,
                        "default": 600,
                        "description": "El ancho m\u00e1ximo del marco de incrustaci\u00f3n en p\u00edxeles.",
                        "type": "integer"
                    },
                    "maxheight": {
                        "required": false,
                        "description": "La altura m\u00e1xima del marco de incrustaci\u00f3n en p\u00edxeles.",
                        "type": "integer"
                    },
                    "discover": {
                        "required": false,
                        "default": true,
                        "description": "Si se realizar\u00e1 una petici\u00f3n de descubrimiento de oEmbed a proveedores que no est\u00e9n en lista blanca.",
                        "type": "boolean"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/convergenciacnoa.org\/wp-json\/oembed\/1.0\/proxy"
            }
        },
        "\/contact-form-7\/v1": {
            "namespace": "contact-form-7\/v1",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "namespace": {
                        "required": false,
                        "default": "contact-form-7\/v1"
                    },
                    "context": {
                        "required": false,
                        "default": "view"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/convergenciacnoa.org\/wp-json\/contact-form-7\/v1"
            }
        },
        "\/contact-form-7\/v1\/contact-forms": {
            "namespace": "contact-form-7\/v1",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }, {
                "methods": ["POST"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/convergenciacnoa.org\/wp-json\/contact-form-7\/v1\/contact-forms"
            }
        },
        "\/contact-form-7\/v1\/contact-forms\/(?P<id>\\d+)": {
            "namespace": "contact-form-7\/v1",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": []
            }, {
                "methods": ["DELETE"],
                "args": []
            }]
        },
        "\/contact-form-7\/v1\/contact-forms\/(?P<id>\\d+)\/feedback": {
            "namespace": "contact-form-7\/v1",
            "methods": ["POST"],
            "endpoints": [{
                "methods": ["POST"],
                "args": []
            }]
        },
        "\/contact-form-7\/v1\/contact-forms\/(?P<id>\\d+)\/refill": {
            "namespace": "contact-form-7\/v1",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }]
        },
        "\/yoast\/v1": {
            "namespace": "yoast\/v1",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "namespace": {
                        "required": false,
                        "default": "yoast\/v1"
                    },
                    "context": {
                        "required": false,
                        "default": "view"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/convergenciacnoa.org\/wp-json\/yoast\/v1"
            }
        },
        "\/yoast\/v1\/configurator": {
            "namespace": "yoast\/v1",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }, {
                "methods": ["POST"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/convergenciacnoa.org\/wp-json\/yoast\/v1\/configurator"
            }
        },
        "\/yoast\/v1\/reindex_posts": {
            "namespace": "yoast\/v1",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/convergenciacnoa.org\/wp-json\/yoast\/v1\/reindex_posts"
            }
        }
    },
    "_links": {
        "help": [{
            "href": "http:\/\/v2.wp-api.org\/"
        }]
    }
}


//////////
[{
    "id": 1525,
    "date": "2017-09-28T15:51:48",
    "date_gmt": "2017-09-28T15:51:48",
    "guid": {
        "rendered": "http:\/\/convergenciacnoa.org\/?p=1525"
    },
    "modified": "2017-09-28T16:07:59",
    "modified_gmt": "2017-09-28T16:07:59",
    "slug": "la-jep-importante-pueblo-afrocolombiano",
    "status": "publish",
    "type": "post",
    "link": "http:\/\/convergenciacnoa.org\/la-jep-importante-pueblo-afrocolombiano\/",
    "title": {
        "rendered": "\u00bfPor qu\u00e9 la JEP es importante para el pueblo afrocolombiano?"
    },
    "content": {
        "rendered": "<h4>\u201cla Jurisdicci\u00f3n Especial para la PAZ \u2013 JEP se presenta como una oportunidad para los afrocolombianos para el esclarecimiento de la verdad, obtener medidas de no repetici\u00f3n y reparaci\u00f3n en el marco del conflicto armado\u201d.<\/h4>\n<p>La corte constitucional colombiana en el 2009 reconoce a trav\u00e9s de su auto 005 de seguimiento a la sentencia T-025 que el pueblo afrocolombiano ha sufrido impactos desproporcionados del desplazamiento forzado y la resistencia frente a sus derechos colectivos. No cabe duda que el pueblo afrocolombiano fue y ha sido una de las poblaciones que m\u00e1s ha sido afectada por el conflicto armado, a tal punto que, junto a otros factores, de reconfigurar a este pueblo que hace diez a\u00f1os era eminentemente rural a principalmente urbano en la actualidad. La desterritorializaci\u00f3n y el desplazamiento ha puesto en peligro la existencia cultural de este pueblo.<\/p>\n<p>Por otro lado, los impactos del conflicto armado han sido proporcionales a la impunidad que ha tenido que soportar el pueblo negro, lo que ha degradado en nuevas formas de revictimizaci\u00f3n al no poder saber la verdad y al no tener garant\u00edas de no repetici\u00f3n. Es entonces que la Jurisdicci\u00f3n Especial para la PAZ \u2013 JEP se presenta como una oportunidad para que los afrocolombianos puedan tener alg\u00fan esclarecimiento de la verdad, obtener medidas de no repetici\u00f3n y reparaci\u00f3n. Es decir que puedan acceder a la justicia que en el medio del conflicto no tuvimos. Ser\u00e1 una oportunidad para saber qui\u00e9nes y bajo que motivos movilizaron las afectaciones de nuestras comunidades.<\/p>\n<p>Una de las principales secuelas de la esclavizaci\u00f3n es la invisibilizaci\u00f3n y la baja representaci\u00f3n de este pueblo en los espacios de toma de decisi\u00f3n, por ejemplo, cabe se\u00f1alar la baja presencia de afrocolombianos en las altas cortes (Corte suprema de justicia, Consejo de Estado y Corte Constitucional), lo cual no es el resultado del azar, sino consecuencia del racismo. En este sentido, incluir a los afrocolombianos en la estructura de la JEP no solo es un reconocimiento a este\u00a0pueblo como uno de los grupos poblacionales m\u00e1s impactados por el conflicto, sino<br \/>\ntambi\u00e9n como una medida de reparaci\u00f3n hist\u00f3rica a un pueblo que todav\u00eda vive las consecuencias de la esclavizaci\u00f3n.<\/p>\n<p>&nbsp;<\/p>\n<h4>\u00bfPor qu\u00e9 es importante que haya afrocolombianos en la en la estructura de la JEP?<\/h4>\n<p>Uno de los elementos que limitan el acceso de los afrocolombianos a la justicia es la desconfianza hacia la institucionalidad responsable de impartirla, bebido a que muchas veces esta se articul\u00f3 con los victimarios en los territorios. Los tiempos de guerra para los afrocolombianos tambi\u00e9n significaron un importante sacrificio a la verdad, la justicia y la reparaci\u00f3n.<\/p>\n<p>En este sentido, la presencia de afrocolombianos como magistrados puede servir de puente de confianza entre los afrocolombianos v\u00edctimas y el acceso a la verdad y la justicia. Sin embargo, estos magistrados deben ir m\u00e1s all\u00e1 del color de piel y deben conocer las situaciones y din\u00e1micas vividas por los afrocolombianos en medio del conflicto y deben contribuir a la sensibilizaci\u00f3n de estas situaciones hacia los diferentes actores involucrados en la estructura de la JEP. Esto sin duda contribuye a la justicia sustentada en la verdad y el reconocimiento del pueblo afrocolombiano.<\/p>\n<p>La presencia de afrocolombianos y afrocolombianas como magistrados puede significar una garant\u00eda para las v\u00edctimas afrocolombianas, ya que se pueden generar sentimientos de seguridad al creer que con esto se puede evitar que haya alguna inclinaci\u00f3n hacia alguno de los bandos victimarios de las comunidades afrocolombianas.<\/p>\n<p>Para el pueblo afrocolombiano y para sus organizaciones la implementaci\u00f3n de los acuerdos de paz en general y en particular la JEP implica un reto organizativo que motiva a replantearse la incidencia pol\u00edtica y la forma de c\u00f3mo nos hemos venido relacionando con lo p\u00fablico. Esto nos llama a ser m\u00e1s creativos y prop\u00f3sitos. En este sentido, la convergencia es fundamental, ya que construir desde la diferencia que caracteriza al pueblo afrocolombiano puede contribuir a que se acceda de forma m\u00e1s eficiente a los ejercicios de verdad, justicia y reparaci\u00f3n.<\/p>\n<p>Por \u00faltimo, es importante no confundir las reparaciones hist\u00f3ricas que el pueblo afrocolombiano ha venido exigiendo al Estado relacionadas a las consecuencias de la esclavitud y las reparaciones suscitadas por los da\u00f1os del conflicto armado. Sin embargo, este \u00faltimo ha profundizado las consecuencias de la primera y generado otras afectaciones como el desplazamiento y la desterritorializaci\u00f3n. La titulaci\u00f3n\u00a0colectiva, la exigencia de mayor representaci\u00f3n en los escenarios de poder, la lucha contra el racismo deben estar siempre presente en nuestras exigencias al Estado colombiano, junto a la b\u00fasqueda de la verdad, la reparaci\u00f3n y las garant\u00edas de no repetici\u00f3n como medidas que nos llevar\u00e1n a encontrar una paz estable y duradera.<\/p>\n<p style=\"text-align: right;\">Oficina Prensa y Comunicaciones CNOA<br \/>\nEntrevistas: 3315 3121926 -3105721450<\/p>\n"
    },
    "excerpt": {
        "rendered": "<p>\u201cla Jurisdicci\u00f3n Especial para la PAZ \u2013 JEP se presenta como una oportunidad para los afrocolombianos para el esclarecimiento de la verdad, obtener medidas de no repetici\u00f3n y reparaci\u00f3n en el marco del conflicto armado\u201d. La corte constitucional colombiana en el 2009 reconoce a trav\u00e9s de su auto 005 de seguimiento a la sentencia T-025 [&hellip;]<\/p>\n",
        "protected": false
    },
    "author": 2,
    "featured_media": 691,
    "comment_status": "open",
    "ping_status": "open",
    "sticky": false,
    "template": "",
    "format": "standard",
    "meta": [],
    "categories": [22, 9],
    "tags": [],
    "x_categories": "Incidencia pol\u00edtica y legislativa, Noticias",
    "x_tags": "",
    "x_featured_media": "http:\/\/convergenciacnoa.org\/wp-content\/uploads\/2017\/07\/reemplazar-150x150.jpg",
    "x_featured_media_medium": "http:\/\/convergenciacnoa.org\/wp-content\/uploads\/2017\/07\/reemplazar-300x156.jpg",
    "x_featured_media_large": "http:\/\/convergenciacnoa.org\/wp-content\/uploads\/2017\/07\/reemplazar.jpg",
    "x_featured_media_original": "http:\/\/convergenciacnoa.org\/wp-content\/uploads\/2017\/07\/reemplazar.jpg",
    "x_date": "28 septiembre, 2017",
    "x_author": "comunicaciones",
    "x_gravatar": "http:\/\/2.gravatar.com\/avatar\/e34084a0f46efb92fb1d74400c96825a?s=96&d=mm&r=g",
    "x_metadata": {
        "_thumbnail_id": "691",
        "_et_post_bg_color": "#ffffff",
        "_et_post_bg_layout": "light",
        "_et_pb_show_title": "on",
        "_et_pb_post_hide_nav": "default",
        "_et_pb_page_layout": "et_right_sidebar",
        "_et_pb_side_nav": "off",
        "_et_pb_use_builder": "",
        "_et_pb_ab_bounce_rate_limit": "5",
        "_et_pb_ab_stats_refresh_interval": "hourly",
        "_et_pb_old_content": "",
        "_et_pb_enable_shortcode_tracking": "",
        "_et_pb_custom_css": "",
        "_et_pb_light_text_color": "#ffffff",
        "_et_pb_dark_text_color": "#666666",
        "_et_pb_content_area_background_color": "rgba(255,255,255,0)",
        "_et_pb_section_background_color": "#ffffff",
        "_yoast_wpseo_focuskw_text_input": "la JEP es importante para el pueblo afrocolombiano",
        "_yoast_wpseo_focuskw": "la JEP es importante para el pueblo afrocolombiano",
        "_yoast_wpseo_linkdex": "60",
        "_yoast_wpseo_content_score": "30",
        "_yoast_wpseo_primary_category": "9"
    },
    "_links": {
        "self": [{
            "href": "http:\/\/convergenciacnoa.org\/wp-json\/wp\/v2\/posts\/1525"
        }],
        "collection": [{
            "href": "http:\/\/convergenciacnoa.org\/wp-json\/wp\/v2\/posts"
        }],
        "about": [{
            "href": "http:\/\/convergenciacnoa.org\/wp-json\/wp\/v2\/types\/post"
        }],
        "author": [{
            "embeddable": true,
            "href": "http:\/\/convergenciacnoa.org\/wp-json\/wp\/v2\/users\/2"
        }],
        "replies": [{
            "embeddable": true,
            "href": "http:\/\/convergenciacnoa.org\/wp-json\/wp\/v2\/comments?post=1525"
        }],
        "version-history": [{
            "href": "http:\/\/convergenciacnoa.org\/wp-json\/wp\/v2\/posts\/1525\/revisions"
        }],
        "wp:featuredmedia": [{
            "embeddable": true,
            "href": "http:\/\/convergenciacnoa.org\/wp-json\/wp\/v2\/media\/691"
        }],
        "wp:attachment": [{
            "href": "http:\/\/convergenciacnoa.org\/wp-json\/wp\/v2\/media?parent=1525"
        }],
        "wp:term": [{
            "taxonomy": "category",
            "embeddable": true,
            "href": "http:\/\/convergenciacnoa.org\/wp-json\/wp\/v2\/categories?post=1525"
        }, {
            "taxonomy": "post_tag",
            "embeddable": true,
            "href": "http:\/\/convergenciacnoa.org\/wp-json\/wp\/v2\/tags?post=1525"
        }],
        "curies": [{
            "name": "wp",
            "href": "https:\/\/api.w.org\/{rel}",
            "templated": true
        }]
    }
}]









/////////////////////



[{
    "id": 1542,
    "date": "2017-09-30T23:30:38",
    "date_gmt": "2017-09-30T23:30:38",
    "guid": {
        "rendered": "http:\/\/convergenciacnoa.org\/?post_type=docsapp&#038;p=1542"
    },
    "modified": "2017-09-30T23:30:40",
    "modified_gmt": "2017-09-30T23:30:40",
    "slug": "prueba",
    "status": "publish",
    "type": "docsapp",
    "link": "http:\/\/convergenciacnoa.org\/docsapp\/prueba\/",
    "title": {
        "rendered": "Prueba"
    },
    "content": {
        "rendered": "",
        "protected": false
    },
    "excerpt": {
        "rendered": "",
        "protected": false
    },
    "author": 2,
    "featured_media": 0,
    "template": "",
    "meta": [],
    "x_featured_media": null,
    "x_featured_media_medium": null,
    "x_featured_media_large": null,
    "x_featured_media_original": null,
    "x_date": "30 septiembre, 2017",
    "x_author": "comunicaciones",
    "x_gravatar": "http:\/\/2.gravatar.com\/avatar\/e34084a0f46efb92fb1d74400c96825a?s=96&d=mm&r=g",
    "x_metadata": {
        "url_descarga": "urlx"
    },
    "_links": {
        "self": [{
            "href": "http:\/\/convergenciacnoa.org\/wp-json\/wp\/v2\/docsapp\/1542"
        }],
        "collection": [{
            "href": "http:\/\/convergenciacnoa.org\/wp-json\/wp\/v2\/docsapp"
        }],
        "about": [{
            "href": "http:\/\/convergenciacnoa.org\/wp-json\/wp\/v2\/types\/docsapp"
        }],
        "author": [{
            "embeddable": true,
            "href": "http:\/\/convergenciacnoa.org\/wp-json\/wp\/v2\/users\/2"
        }],
        "wp:attachment": [{
            "href": "http:\/\/convergenciacnoa.org\/wp-json\/wp\/v2\/media?parent=1542"
        }],
        "curies": [{
            "name": "wp",
            "href": "https:\/\/api.w.org\/{rel}",
            "templated": true
        }]
    }
}]
