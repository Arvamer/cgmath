(function() {var implementors = {};
implementors['libc'] = [];implementors['cgmath'] = ["impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[</a>S<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>; 2]</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>; 2]</a>&gt; for <a class='struct' href='cgmath/struct.Matrix2.html' title='cgmath::Matrix2'>Matrix2</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[</a>S<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>; $n * $n)]> for $MatrixN<$S> {
            #[inline]
            fn as_ref(&self) -> &[$S; ($n * $n)] {
                unsafe { mem::transmute(self) }
            }
        }

        impl<$S> AsMut<[$S; ($n * $n)]> for $MatrixN<$S> {
            #[inline]
            fn as_mut(&mut self) -> &mut [$S; ($n * $n)] {
                unsafe { mem::transmute(self) }
            }
        }

        // impl<$S> From<[$S; ($n * $n)]> for $MatrixN<$S> {
        //     #[inline]
        //     fn from(m: [$S; ($n * $n)]) -> $MatrixN<$S> {
        //         // TODO: Not sure how to implement this...
        //         unimplemented!()
        //     }
        // }

        impl<'a, $S> From<&'a [$S; ($n * $n)]> for &'a $MatrixN<$S> {
            #[inline]
            fn from(m: &'a [$S; ($n * $n)]) -> &'a $MatrixN<$S> {
                unsafe { mem::transmute(m) }
            }
        }

        impl<'a, $S> From<&'a mut [$S; ($n * $n)]> for &'a mut $MatrixN<$S> {
            #[inline]
            fn from(m: &'a mut [$S; ($n * $n)]) -> &'a mut $MatrixN<$S> {
                unsafe { mem::transmute(m) }
            }
        }
    }
}

fixed_array_conversions!(Matrix2<S> { x:0, y:1 }, 2]</a>&gt; for <a class='struct' href='cgmath/struct.Matrix2.html' title='cgmath::Matrix2'>Matrix2</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[</a>S<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>; 3]</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>; 3]</a>&gt; for <a class='struct' href='cgmath/struct.Matrix3.html' title='cgmath::Matrix3'>Matrix3</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[</a>S<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>; $n * $n)]> for $MatrixN<$S> {
            #[inline]
            fn as_ref(&self) -> &[$S; ($n * $n)] {
                unsafe { mem::transmute(self) }
            }
        }

        impl<$S> AsMut<[$S; ($n * $n)]> for $MatrixN<$S> {
            #[inline]
            fn as_mut(&mut self) -> &mut [$S; ($n * $n)] {
                unsafe { mem::transmute(self) }
            }
        }

        // impl<$S> From<[$S; ($n * $n)]> for $MatrixN<$S> {
        //     #[inline]
        //     fn from(m: [$S; ($n * $n)]) -> $MatrixN<$S> {
        //         // TODO: Not sure how to implement this...
        //         unimplemented!()
        //     }
        // }

        impl<'a, $S> From<&'a [$S; ($n * $n)]> for &'a $MatrixN<$S> {
            #[inline]
            fn from(m: &'a [$S; ($n * $n)]) -> &'a $MatrixN<$S> {
                unsafe { mem::transmute(m) }
            }
        }

        impl<'a, $S> From<&'a mut [$S; ($n * $n)]> for &'a mut $MatrixN<$S> {
            #[inline]
            fn from(m: &'a mut [$S; ($n * $n)]) -> &'a mut $MatrixN<$S> {
                unsafe { mem::transmute(m) }
            }
        }
    }
}

fixed_array_conversions!(Matrix2<S> { x:0, y:1 }, 2);
fixed_array_conversions!(Matrix3<S> { x:0, y:1, z:2 }, 3]</a>&gt; for <a class='struct' href='cgmath/struct.Matrix3.html' title='cgmath::Matrix3'>Matrix3</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[</a>S<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>; 4]</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>; 4]</a>&gt; for <a class='struct' href='cgmath/struct.Matrix4.html' title='cgmath::Matrix4'>Matrix4</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[</a>S<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>; $n * $n)]> for $MatrixN<$S> {
            #[inline]
            fn as_ref(&self) -> &[$S; ($n * $n)] {
                unsafe { mem::transmute(self) }
            }
        }

        impl<$S> AsMut<[$S; ($n * $n)]> for $MatrixN<$S> {
            #[inline]
            fn as_mut(&mut self) -> &mut [$S; ($n * $n)] {
                unsafe { mem::transmute(self) }
            }
        }

        // impl<$S> From<[$S; ($n * $n)]> for $MatrixN<$S> {
        //     #[inline]
        //     fn from(m: [$S; ($n * $n)]) -> $MatrixN<$S> {
        //         // TODO: Not sure how to implement this...
        //         unimplemented!()
        //     }
        // }

        impl<'a, $S> From<&'a [$S; ($n * $n)]> for &'a $MatrixN<$S> {
            #[inline]
            fn from(m: &'a [$S; ($n * $n)]) -> &'a $MatrixN<$S> {
                unsafe { mem::transmute(m) }
            }
        }

        impl<'a, $S> From<&'a mut [$S; ($n * $n)]> for &'a mut $MatrixN<$S> {
            #[inline]
            fn from(m: &'a mut [$S; ($n * $n)]) -> &'a mut $MatrixN<$S> {
                unsafe { mem::transmute(m) }
            }
        }
    }
}

fixed_array_conversions!(Matrix2<S> { x:0, y:1 }, 2);
fixed_array_conversions!(Matrix3<S> { x:0, y:1, z:2 }, 3);
fixed_array_conversions!(Matrix4<S> { x:0, y:1, z:2, w:3 }, 4]</a>&gt; for <a class='struct' href='cgmath/struct.Matrix4.html' title='cgmath::Matrix4'>Matrix4</a>&lt;S&gt;","impl&lt;S: <a class='trait' href='cgmath/trait.BaseFloat.html' title='cgmath::BaseFloat'>BaseFloat</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[</a>S<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>; 4]</a>&gt; for <a class='struct' href='cgmath/struct.Quaternion.html' title='cgmath::Quaternion'>Quaternion</a>&lt;S&gt;","impl&lt;S: <a class='trait' href='cgmath/trait.BaseFloat.html' title='cgmath::BaseFloat'>BaseFloat</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(</a>S, S, S, S<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>)</a>&gt; for <a class='struct' href='cgmath/struct.Quaternion.html' title='cgmath::Quaternion'>Quaternion</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[</a>S<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>; 2]</a>&gt; for <a class='struct' href='cgmath/struct.Vector2.html' title='cgmath::Vector2'>Vector2</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[</a>S<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>; 3]</a>&gt; for <a class='struct' href='cgmath/struct.Vector3.html' title='cgmath::Vector3'>Vector3</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[</a>S<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>; 4]</a>&gt; for <a class='struct' href='cgmath/struct.Vector4.html' title='cgmath::Vector4'>Vector4</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(</a>S, S<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>)</a>&gt; for <a class='struct' href='cgmath/struct.Vector2.html' title='cgmath::Vector2'>Vector2</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(</a>S, S, S<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>)</a>&gt; for <a class='struct' href='cgmath/struct.Vector3.html' title='cgmath::Vector3'>Vector3</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(</a>S, S, S, S<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>)</a>&gt; for <a class='struct' href='cgmath/struct.Vector4.html' title='cgmath::Vector4'>Vector4</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[</a>S<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>; 2]</a>&gt; for <a class='struct' href='cgmath/struct.Point2.html' title='cgmath::Point2'>Point2</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>[</a>S<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.array.html'>; 3]</a>&gt; for <a class='struct' href='cgmath/struct.Point3.html' title='cgmath::Point3'>Point3</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(</a>S, S<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>)</a>&gt; for <a class='struct' href='cgmath/struct.Point2.html' title='cgmath::Point2'>Point2</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(</a>S, S, S<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>)</a>&gt; for <a class='struct' href='cgmath/struct.Point3.html' title='cgmath::Point3'>Point3</a>&lt;S&gt;","impl&lt;S: <a class='trait' href='cgmath/trait.BaseFloat.html' title='cgmath::BaseFloat'>BaseFloat</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='struct' href='cgmath/struct.Matrix2.html' title='cgmath::Matrix2'>Matrix2</a>&lt;S&gt;&gt; for <a class='struct' href='cgmath/struct.Basis2.html' title='cgmath::Basis2'>Basis2</a>&lt;S&gt;","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='struct' href='cgmath/struct.Matrix3.html' title='cgmath::Matrix3'>Matrix3</a>&lt;S&gt;&gt; for <a class='struct' href='cgmath/struct.Basis3.html' title='cgmath::Basis3'>Basis3</a>&lt;S&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
